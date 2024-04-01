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
      <body className={` ${inter.className} flex-col items-center `}>
        <TopBar isLoggedIn={await isAuthenticated()}/>
        <div className="flex-row">
        {/* <Sidebar isLoggedIn={await isAuthenticated()}/> */}
        <Auth>
          <main className="pt-10 h-full w-full overflow-y-auto">
            {children}
          </main>
        </Auth>
        </div>
      </body>

    </html>
  );
}
