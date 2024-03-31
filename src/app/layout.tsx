import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Auth from './components/auth/Auth';
import { isAuthenticated } from './utils/amplifyServerUtils';
import TopBar from './components/TopBar';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness App",
  description: "A fitness app with AI suggestions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} flex items-start justify-between`}>
        <Sidebar isLoggedIn={await isAuthenticated()}/>
        <TopBar />
        <Auth>
          <main className="pt-10 w-full h-full">
            {children}
          </main>
        </Auth>
          
      </body>

    </html>
  );
}
