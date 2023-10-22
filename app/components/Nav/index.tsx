import React from "react";
import Image from "next/image";

export const Nav: React.FC = () => {
  return (
    <nav className="flex flex-row-reverse justify-between py-6 lg:grid lg:grid-cols-2 lg:py-8 items-center ">
      <div className="">
        <Image src="/logo.png" alt="Logo" width={200} height={100} />
      </div>
      <div className="block lg:hidden text-white">
        <div className="space-y-2">
          {[1, 2, 3].map(() => (
            <>
              <div className="w-8 h-1 bg-white rounded-sm" />
            </>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-around items-center">
        {[
          "Nossa identidade",
          "Materiais didáticos",
          "Soluções educacionais",
        ].map((item, index) => (
          <>
            <a
              key={index}
              href="#"
              className="text-center mx-4 text-white font-medium"
            >
              {item}
            </a>
          </>
        ))}
        <button className="bg-white h-9 w-24 text-end px-4 text-lg uppercase rounded-md text-red-500">
          login
        </button>
      </div>
    </nav>
  );
};
