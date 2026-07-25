import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Varun Traders | Premium Fruit Protection Covers",
  description:
    "Manufacturer of premium biodegradable fruit protection covers for banana, guava, pomegranate, mango and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}