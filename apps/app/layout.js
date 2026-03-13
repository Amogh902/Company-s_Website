import "./globals.css";

export const metadata = {
  title: "OffshoreMitra | DevOps & Cloud Consulting",
  description:
    "OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, automation, and FinOps optimization for modern businesses.",

  openGraph: {
    title: "OffshoreMitra | DevOps & Cloud Consulting",
    description:
      "DevOps consulting, cloud infrastructure, automation, and FinOps optimization services.",
    url: "https://offshoremitra.com",
    siteName: "OffshoreMitra",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OffshoreMitra | DevOps & Cloud Consulting",
    description:
      "DevOps consulting, cloud infrastructure, automation, and FinOps optimization services.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}