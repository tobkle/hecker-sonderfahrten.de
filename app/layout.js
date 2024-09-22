import localFont from "next/font/local";
import "./globals.css";

const interSans = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Hecker Sonderfahrten",
  description: "Beratung, Planung und Begleitung von Sonderfahrten",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
