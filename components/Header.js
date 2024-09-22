import React from "react";
import Link from "next/link";

import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full ">
      <section id="title" className="pt-12 p-8">
        <div className="flex lg:flex-row flex-col">
          <div className="flex-0 cursor-pointer text-right w-full flex flex-col lg:items-start items-center">
            <Link href="/">
              <Image
                width={288}
                height={96}
                src="/logo.svg"
                alt="Logo Hecker Sonderfahrten"
              />
            </Link>
          </div>

          <div className="text-center w-full flex flex-col items-center lg:mt-1 mt-8">
            <h1 className="text-4xl md:text-6xl leading-none font-extrabold text-blue-800 text-center mb-4">
              Schwertransport
            </h1>
            <h1 className="text-4xl md:text-6xl leading-none font-extrabold text-blue-800 text-center mb-4">
              Begleitung
            </h1>
            <h1 className="text-4xl md:text-6xl leading-none font-extrabold text-blue-800 text-center">
              VLM
            </h1>
          </div>

          <div className=" w-full flex flex-col lg:items-end items-center lg:mt-1 mt-8">
            <div>
              <a href="tel:+491772608240">
                <div className="flex flex-row gap-6 justify-center">
                  <span>
                    <img className="" src="/phone.svg" alt="telefon" />
                  </span>
                  <span className="text-lg leading-7 font-medium text-blue-900">
                    <div>24-Stunden-Service</div>
                    <div>+49 (177) 26 08 24 0</div>
                  </span>
                </div>
              </a>
            </div>

            <div>
              <a
                className="block text-center text-blue-900 text-lg leading-3 font-medium"
                href="mailto:info@hecker-sonderfahrten.de"
              >
                info@hecker-sonderfahrten.de
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lkw"
        className="pt-24 relative lg:h-[800px] md:h-[600px] h-[400px]"
      >
        <Image fill src="/hero.png" alt="schwerlasttransport" />
      </section>
    </header>
  );
};

export default Header;
