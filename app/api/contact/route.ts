import { Resend } from "resend";

export const runtime = "nodejs";

const LIMITS = {
  name: 120,
  email: 160,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

const FIELDS = Object.keys(LIMITS) as Field[];

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const MONO = "'JetBrains Mono', 'Courier New', Courier, monospace";

const renderEmail = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `<!doctype html>
<html lang="es">
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;padding:0;background:#0d1117;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0d1117;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#161b22;border:1px solid #30363d;border-radius:8px;">
            <tr>
              <td style="padding:24px 28px 18px;border-bottom:1px solid #30363d;">
                <p style="margin:0;font-family:${MONO};font-size:12px;color:#3fb950;">$ new-contact --portfolio</p>
                <h1 style="margin:14px 0 0;font-family:${MONO};font-size:26px;line-height:1.15;font-weight:600;color:#e6edf3;">Nuevo mensaje</h1>
                <p style="margin:8px 0 0;font-family:${MONO};font-size:13px;color:#8b949e;">desde javiermedinaj-web.vercel.app</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 28px 8px;font-family:${MONO};font-size:14px;color:#c9d1d9;">
                <p style="margin:0 0 10px;"><span style="color:#58a6ff;">name</span> .... ${name}</p>
                <p style="margin:0 0 10px;"><span style="color:#58a6ff;">email</span> ... <a href="mailto:${email}" style="color:#58a6ff;">${email}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 26px;">
                <p style="margin:0 0 8px;font-family:${MONO};font-size:12px;text-transform:uppercase;color:#8b949e;">message</p>
                <div style="font-family:${MONO};font-size:14px;line-height:1.7;color:#c9d1d9;white-space:pre-wrap;border-left:3px solid #58a6ff;padding-left:14px;">${message}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;border-top:1px solid #30363d;font-family:${MONO};font-size:11px;color:#8b949e;">
                Enviado desde el formulario de contacto del portfolio.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL ?? process.env.CONTACT_TO;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    process.env.CONTACT_FROM ??
    "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or RESEND_TO_EMAIL");
    return Response.json(
      {
        ok: false,
        error: "El formulario todavía no está configurado.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => ({}))) as Partial<
    Record<Field, string>
  > & { website?: string };

  // Honeypot: si viene completo, es un bot.
  if (body.website) {
    return Response.json({ ok: true });
  }

  for (const field of FIELDS) {
    const value = String(body[field] ?? "").trim();
    if (!value) {
      return Response.json(
        { ok: false, field, error: "Completá todos los campos." },
        { status: 400 },
      );
    }
    if (value.length > LIMITS[field]) {
      return Response.json(
        { ok: false, field, error: "El mensaje es demasiado largo." },
        { status: 400 },
      );
    }
  }

  const name = String(body.name).trim();
  const email = String(body.email).trim();
  const message = String(body.message).trim();

  if (!isEmail(email)) {
    return Response.json(
      { ok: false, field: "email", error: "Ingresá un email válido." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio — ${name}`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
    html: renderEmail({
      name: escapeHtml(name),
      email: escapeHtml(email),
      message: escapeHtml(message),
    }),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { ok: false, error: "No se pudo enviar el mensaje. Probá de nuevo." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
