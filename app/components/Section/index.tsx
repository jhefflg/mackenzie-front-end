import React from "react";
import Image from "next/image";

type Props = {
  src?: string;
  title?: string | JSX.Element;
  textDesktop?: string;
  textMobile?: string;
  classCustom?: string;
  btn?: string | JSX.Element;
  isHeader?: boolean;
};

export const Section = ({
  title,
  src = "",
  textDesktop,
  textMobile,
  classCustom,
  btn,
  isHeader = false,
}: Props) => {
  return (
    <section className={`${"flex my-6 lg:my-0"} ${classCustom}`}>
      <div className="flex-1 lg:px-5 lg:mb-10">
        <Image
          className={`${"dark:drop-shadow-[0_0_0.3rem_#ffffff70] shadow-lg rounded-2xl xl:h-auto"} ${
            isHeader && "h-[32rem]"
          }`}
          src={src}
          alt=""
          width={800}
          height={700}
          priority
        />
      </div>
      <div className="lg:flex-1 px-3 lg:mb-10 lg:mr-14">
        <div className="my-6">{title}</div>
        <span
          className={`${"hidden text-2xl text-start lg:block"} ${
            isHeader ? "lg:text-white" : "text-gray-500"
          }`}
        >
          {textDesktop}
        </span>
        <span
          className={`${"text-gray-500 text-2xl text-start lg:hidden"} ${
            isHeader ? "lg:text-white" : "text-gray-500"
          }`}
        >
          {textMobile}
        </span>
        <div
          className={`${"flex justify-end lg:justify-start"} ${isHeader && "lg:justify-center"}`}
        >
          {btn && (
            <div>
              {btn}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
