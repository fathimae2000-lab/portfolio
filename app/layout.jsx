import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import Header from "./components/Header";



const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <body className="container-fluid">
      <Header />
        {children}
        </body>
    </html>
  );
}