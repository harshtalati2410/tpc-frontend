import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ToggleProvider } from "@/contextProviders/ToggleProvider";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import NavButtonGroup from "@/components/NavButtonGroup";
import NextAuthProvider from "@/contextProviders/sessionProvider";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/store/provider";
import { cookies } from "next/headers";
import { fetchAllSeasons } from "@/helpers/api";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: React.ReactNode;
  auth: React.ReactNode;
}

const RootLayout = async ({ children, auth }: Props) => {
  const className = inter.className;
  const AllSeasons = await fetchAllSeasons(
    cookies()?.get("accessToken")?.value,
  );
  console.log(AllSeasons);
  return (
    <html lang="en">
      <body className={className}>
        <ToggleProvider>
          <div className="flex flex-col">
            <nav className="shadow-xl bg-gray-900">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center h-[8vh]">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-white font-bold text-2xl">
                    <div className="hidden sm:block mx-2">TPC</div>
                  </Link>
                </div>
                <NavButtonGroup />
              </div>
            </nav>
            {/* Page Content */}
            <Toaster />

            <NextAuthProvider>
              <div className="flex-auto flex h-[92vh] ">
                {/* sidebar and main content share this space */}
                <Suspense fallback={<>Loading...</>}>
                  <Sidebar AllSeasons={AllSeasons} />
                </Suspense>
                <MainContent>
                  <Providers>
                    
                      {children}
                    
                  </Providers>
                </MainContent>
              </div>
              {auth}
            </NextAuthProvider>
          </div>
        </ToggleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
