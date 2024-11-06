import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "Tours & Travel",
    description: "Travel UiUx application",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
