import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const Card = ({ title, description, image }) => (
  <div className="p-8 bg-blue-50 rounded-lg shadow-md m-8 max-w-96 flex flex-col gap-8 items-center justify-top">
    <Image height={120} width={120} src={image} alt="lkw" />
    <h2 className="text-lg leading-7 font-medium text-blue-800">{title}</h2>
    <p className="text-base leading-6 font-normal text-gray-500">
      {description}
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-inter-sans)] bg-slate-50">
      <SEO />
      <Header />

      <main className="flex flex-col items-center justify-center text-center">
        <section id="dienstleistungen" className="pt-32">
          <div className="text-base leading-6 uppercase font-semibold text-blue-800">
            Sicher zum Ziel
          </div>

          <h1 className="pt-2 text-4xl leading-10 font-extrabold text-blue-800">
            Unsere Dienstleistungen
          </h1>

          <p className="pt-2 text-xl leading-7 font-normal text-gray-500">
            Vertrauen Sie unserer Erfahrung
          </p>

          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
            <Card
              title="Transportbegleitung mit Begleitfahrzeug"
              description="Wir übernehmen die Planung, Absicherung und Begleitung Ihres
                Transportes mit unserem BF3 Begleitfahrzeug"
              image="/lorry.svg"
            />

            <Card
              title="Prüfung und Erkundung"
              description="Überprüfung der Strecke, um kritische Stellen abzusichern und zu
                dokumentieren"
              image="/map.svg"
            />

            <Card
              title="Verkehrssicherung"
              description="Wir richten Sperrungen, Halteverbotszonen oder weitere
                Verkehrssicherungen ein. Verkehrslenkende Maßnahmen (VLM)"
              image="/absperrung.svg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
