import * as React from "react";
import Link from "next/link";

import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { Shell } from "@/components/shell";

export function Header() {
    return (
        <Shell className="w-full space-y-2 md:w-1/2">
            <div className="flex items-center justify-between">
                <div className="leading-tight">
                    <h1 className="font-medium">Jack Quinlan</h1>
                </div>
                <div className="flex items-center gap-1">
                    <Link
                        className="rounded-md p-1 hover:bg-accent hover:text-foreground"
                        href="https://github.com/jackquinlan"
                        target="_blank"
                    >
                        <GitHubLogoIcon className="h-4 w-4" />
                    </Link>
                    <Link
                        className="rounded-md p-1 hover:bg-accent hover:text-foreground"
                        href="https://twitter.com/abinaryorbit"
                        target="_blank"
                    >
                        <TwitterLogoIcon className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            <p className="text-xs text-zinc-500">
                Hi, my name is Jack. I&apos;m a 23 year old software engineer currently based in
                Washington, DC. I like playing golf, reading, and learning new things.
            </p>
        </Shell>
    );
}
