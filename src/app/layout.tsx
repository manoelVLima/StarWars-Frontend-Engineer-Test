import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Application"
};

export default function RootLayout({
  children
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
          <NavigationBar />
          {children}
        </Providers>
        </body>
    </html>
  );
}
