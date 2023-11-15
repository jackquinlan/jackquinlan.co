import * as React from "react";
import { Inter } from "next/font/google";

import "@/globals.css";

const int = Inter({ subsets: ["latin"], variable: "--inter" });

interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head />
            <body className="">
                {children}
            </body>
        </html>
    );
}