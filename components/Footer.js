import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col items-center justify-center w-full bg-gray-800">
      <div className="pt-20 bg-blue-800 w-full flex flex-row justify-center">
        <img src="/hecker-schwertransport.png" alt="Hecker Sonderfahrten" />
      </div>

      <ul className="pt-12 text-base leading-6 font-normal text-gray-400 flex flex-row space-x-4">
        <li>
          <Link href="impressum" className="cursor-pointer">
            Impressum
          </Link>
        </li>
        <li>
          <a href="https://www.facebook.com/Hecker-Sonderfahrten-eK-1034951213187046">
            <img src="/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <Link href="datenschutz" className="cursor-pointer">
            Datenschutz
          </Link>
        </li>
      </ul>

      <div className="pt-4 pb-14 text-base leading-6 font-normal text-gray-200 text-center">
        <span className="font-bold">Hecker Sonderfahrten e.K. </span>
        <address className="font-thin not-italic">
          Am Haldenberg 19 <br />
          74564 Crailsheim{" "}
        </address>

        <tel>
          +49 (177) 26 08 24 0 <br /> +49 (7951) 31 98 270
        </tel>
      </div>
    </footer>
  );
};

export default Footer;
