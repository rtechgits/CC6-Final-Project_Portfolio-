import type { Metadata } from "next";
import "./globals.css";

// app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio',
  description: 'UI/UX Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
