import React from "react"
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full ">
            <section id="title" className="pt-24">
                <Link href="/">
                    <a className="cursor-pointer">
                        <h1 className="text-4xl md:text-6xl leading-none font-extrabold text-blue-800 text-center">
                            Schwertransport
                            <br />
                            Begleitung
                            <br />
                            VLM
                        </h1>
                    </a>
                </Link>
            </section>

            <section id="telefon" className="pt-8">
                <a href="tel:+491772608240">
                    <div className="flex flex-row justify-center">
                        <span>
                            <img className="" src="/phone.svg" alt="telefon" />
                        </span>

                        <span className="text-lg leading-7 font-medium text-blue-900">
                            <div>24-Stunden-Service</div>
                            <div>+49 (177) 26 08 24 0</div>
                        </span>
                    </div>
                </a>
                <a
                    className="block text-center text-blue-900 text-lg leading-7 font-medium"
                    href="info@hecker-sonderfahrten.de"
                >
                    info@hecker-sonderfahrten.de
                </a>
            </section>

            <section id="logo" className="pt-8">
                <Link href="/">
                    <a className="cursor-pointer">
                        <img
                            className="w-1/2 md:w-1/4 xl:w-1/6 mx-auto"
                            src="/logo.svg"
                            alt="Logo Sonderfahrten Hecker"
                        />
                    </a>
                </Link>
            </section>

            <section id="lkw" className="pt-24">
                <img
                    className="w-full"
                    src="/hero.png"
                    alt="schwerlasttransport"
                />
            </section>
        </header>
    )
}

export default Header
