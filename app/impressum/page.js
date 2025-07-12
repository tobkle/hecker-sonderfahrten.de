import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SEO from "../../components/SEO";

const impressum = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <SEO />
      <Header />

      <main className="flex flex-col items-center justify-center text-center text-gray-800">
        <section id="impressum" className="pt-32">
          <div className="text-base leading-6 uppercase font-semibold text-blue-800">
            HECKER SONDERFAHRTEN E.K.
          </div>
          <h1 className="pt-2 text-4xl leading-10 font-extrabold text-blue-800">
            Impressum
          </h1>
          <p className="pt-2 text-xl leading-7 font-normal text-gray-500">
            Pflichtangaben
          </p>
          <p className="pt-8 flex flex-col justify-center ">
            <address className="">
              Hecker Sonderfahrten e.K. <br />
              Am Haldenberg 19 <br />
              74564 Crailsheim <br />
              <a className="block pt-2" href="tel:+4979513198270">
                Telefon: 07951 / 3198270
                <br />
                Telefax: 07951 / 3198269 <br />
              </a>{" "}
              <a
                className="block pt-2"
                href="mailto:info@hecker-sonderfahrten.de"
              >
                E-Mail: info@hecker-sonderfahrten.de{" "}
              </a>
              <a className="block" href="https://www.hecker-sonderfahrten.de">
                Internet: www.hecker-sonderfahrten.de
              </a>
            </address>

            <ul className="p-4 mt-8 grid grid-cols-2 text-left w-1/2 mx-auto bg-gray-100">
              <li>Angaben zum Unternehmen Inhaber:</li>
              <li>Herr Michael Hecker</li> <li>Rechtsform:</li>
              <li>Eingetragener Kaufmann (e.K.)</li> <li>Kammer: </li>
              <li>IHK Heilbronn</li>
              <li>Berufsbezeichnung:</li>
              <li>Speditionskaufmann (Deutschland)</li> <li>Registerart: </li>
              <li>Handelsregister</li> <li>Registerort: </li>
              <li>Amtsgericht Ulm </li>
              <li>Registernummer: </li>
              <li>HRA 723932</li>
              <li>Umsatzsteuer-ID:</li> <li>DE 814 529 113</li>
            </ul>

            <div className="pt-8 w-1/2 mx-auto">
              Unser Betrieb nimmt an einem Verbraucherstreitigkeitsverfahren
              nicht teil, und ist hierzu auch nicht verpflichtet. <br /> Bitte
              beachten Sie auch unsere{" "}
              <Link href="datenschutz" className="cursor-pointer">
                Datenschutzerklärung
              </Link>
              .
            </div>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default impressum;
