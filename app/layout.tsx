import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Nav from "./ui/nav";
import { julee } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Echos of the past",
  description: "Letters from the past",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${julee.className} text-lg antialiased relative`}>
        <Nav />
        <Image src={"/bg.png"} fill={true} alt="bg" />
        <div className="min-h-screen max-w-[1440px] m-auto ">{children}</div>
      </body>
    </html>
  );
}
