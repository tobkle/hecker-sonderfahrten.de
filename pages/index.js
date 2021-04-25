import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <SEO />
            <Header />

            <main className="flex flex-col items-center justify-center text-center">
                <section id="dienstleistungen" className="pt-32">
                    <div className="text-base leading-6 uppercase font-semibold text-blue-400">
                        Sicher zum Ziel
                    </div>

                    <h1 className="pt-2 text-4xl leading-10 font-extrabold">
                        Unsere Dienstleistungen
                    </h1>

                    <p className="pt-2 text-xl leading-7 font-normal text-gray-500">
                        Vertrauen Sie unserer Erfahrung
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-3">
                        <li className="pt-8 flex flex-col items-center">
                            <img className="w-18" src="/lorry.svg" alt="lkw" />

                            <h2 className="pt-5 text-lg leading-7 font-medium text-blue-800">
                                Transportbegleitung | Begleitfahrzeug
                            </h2>

                            <div className="pt-5 text-base leading-6 font-normal text-gray-500">
                                Wir übernehmen die Planung, Absicherung und
                                Begleitung Ihres Transportes mit unserem BF3
                                Begleitfahrzeug
                            </div>
                        </li>

                        <li className="pt-8 flex flex-col items-center">
                            <img className="w-18" src="/map.svg" alt="map" />
                            <h2 className="pt-5 text-lg leading-7 font-medium text-blue-800">
                                Prüfung & Erkundung
                            </h2>
                            <div className="pt-5 text-base leading-6 font-normal text-gray-500">
                                Überprüfung der Strecke, um kritische Stellen
                                abzusichern und zu dokumentieren
                            </div>
                        </li>

                        <li className="pt-8 flex flex-col items-center">
                            <img
                                className="w-18"
                                src="/absperrung.svg"
                                alt="absperrung"
                            />
                            <h2 className="pt-5 text-lg leading-7 font-medium text-blue-800">
                                Verkehrssicherung
                            </h2>
                            <div className="pt-5 text-base leading-6 font-normal text-gray-500">
                                Wir richten Sperrungen, Halteverbotszonen oder
                                weitere Verkehrssicherungen ein
                            </div>
                        </li>
                        <li></li>

                        <li className="pt-8">
                            <a
                                className="block flex flex-col items-center"
                                href="tel:+491772608240"
                            >
                                <img
                                    className="w-18"
                                    src="/phone.svg"
                                    alt="telefon"
                                />
                                <h2 className="pt-5 text-lg leading-7 font-medium text-blue-800">
                                    24-Stunden-Service
                                </h2>
                                <div className="pt-5 text-base leading-6 font-normal text-gray-500">
                                    +49 (177) 26 08 24 0
                                </div>
                            </a>
                        </li>
                        <li></li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    )
}
