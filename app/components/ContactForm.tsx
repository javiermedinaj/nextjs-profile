"use client";

import { useRef, useState } from "react";

type Status = {
  type: "idle" | "sending" | "success" | "error";
  message: string;
};

const inputClass =
  "w-full rounded-md border border-border bg-[#0d1117] px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

const labelClass = "flex flex-col gap-1.5 text-sm text-muted";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const sending = status.type === "sending";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    setStatus({ type: "sending", message: "Enviando..." });
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus({
        type: "success",
        message: "Mensaje enviado. Gracias por escribirme.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "No se pudo enviar el mensaje.",
      });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Nombre
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Mensaje
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Contame qué tenés en mente..."
          className={`${inputClass} resize-y`}
        />
      </label>

      <label
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#0d1117] transition-colors hover:bg-[#79b8ff] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Enviando..." : "Enviar mensaje"}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`min-h-[1em] text-sm ${
            status.type === "success"
              ? "text-terminal-green"
              : status.type === "error"
                ? "text-terminal-red"
                : "text-muted"
          }`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
