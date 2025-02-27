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
  image: "/images/cover.jpg",
  url: "https://tourist-website.com",
  type: "website",
  keywords: ["tourist", "travel", "website"],
  locale: "en_US",
  site_name: "Tourist Website",
  twitter: "@tourist-website",
  facebook: "tourist-website",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  favicon: "/favicon.ico",
  apple_touch_icon: "/apple-touch-icon.png",
  canonical: "https://tourist-website.com",
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
