import "./globals.css";

export const metadata = {
  title: "OffshoreMitra | DevOps & Cloud Consulting",
  description:
    "OffshoreMitra provides DevOps consulting, cloud infrastructure solutions, automation, and FinOps optimization for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}