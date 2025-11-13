import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Maleks's Testing website",
  description: "Ok i will do this change , I am success full now everything is fine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <nav className ="absolute top-20 right-6 flex gap-20 text-2xl font-medium">
  <Link href="/about" className ="no-underline text-white hover:text-gray-400 transition duration-200">About</Link>
  <Link href="/services" className ="no-underline text-white hover:text-gray-400 transition duration-200">Services</Link>
  <Link href="/blog" className ="no-underline text-white hover:text-gray-400 transition duration-200">Blog</Link>
  <Link href="/copyfile" className ="no-underline text-white hover:text-gray-400 transition duration-200">Check</Link>
</nav> {children}
      </body>
    </html>
  );
}
