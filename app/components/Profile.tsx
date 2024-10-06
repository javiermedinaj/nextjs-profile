import Image from "next/image";
import Me from "../assets/me.jpg";

export function Profile() {
  return (
    <div className="text-center">
      <Image
        src={Me}
        alt="Javier Medina"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">Javier Medina</h1>
      <p className="text-gray-400 mb-2">Web development</p>
      <p className="text-sm text-gray-500">
        Working hard, having fun, being happy
      </p>
    </div>
  );
}
