import * as React from "react";

import { GeistSans } from "geist/font/sans";

import "@/globals.css";

import { cn, constructMetadata } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = constructMetadata();
interface Props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head />
            <body className={cn(GeistSans.className, GeistSans.variable)}>
                <main className="container flex w-full flex-col items-center pt-16">
                    <TooltipProvider>{children}</TooltipProvider>
                </main>
            </body>
        </html>
    );
}
