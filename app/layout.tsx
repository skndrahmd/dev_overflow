import { title } from "process";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter, Space_Grotesk} from 'next/font/google'
import type { Metadata } from "next";


const inter = Inter({ subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
 });

 const spaceGrotesk = Space_Grotesk({ subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
 });

export const metadata: Metadata = {
  title: "DevOverflow",
  description: "A community-driven Q&A platform for developers",
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
