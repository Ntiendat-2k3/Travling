import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
});

export const metadata = {
  title: "Tourist Website",
  description: "A website for tourists",
  keywords: ["tourist", "travel", "website"],
  robots: "index, follow",
  googlebot: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
