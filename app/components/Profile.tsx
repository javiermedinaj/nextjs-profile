import Image from "next/image";
import Me from "../assets/me.jpg";

export function Profile() {
  return (
    <div className="text-center mt-12">
      <Image
        src={Me}
        alt="Javier Medina"
        className="rounded-full border select-none border-dark-gray2 mx-auto mb-4 h-40 w-40" 
      />
      <h1 className="text-2xl font-bold mb-2">Javier Medina</h1>
      <p className="text-gray-400 mb-2">Web development</p>
      <p className="text-sm text-gray-500">
        Learning and having fun
      </p>
    </div>
  );
}
