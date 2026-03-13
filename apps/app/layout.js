import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

export const metadata = {
  title: "OffshoreMitra | DevOps & Cloud Consulting",
  description:
    "OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, automation and FinOps optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}
