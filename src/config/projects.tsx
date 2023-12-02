import * as React from "react";

import { CrumpledPaperIcon } from "@radix-ui/react-icons";
import { Shapes } from "lucide-react";

export type Project = {
    name: string;
    desc: string;
    icon?: React.ReactNode;
    website?: string;
    github: string;
};

export const PROJECTS: Project[] = [
    {
        name: "Blueprint",
        desc: "A Next.js starter kit built to help you get your project off the ground faster.",
        website: "https://blueprint.jackquinlan.co/",
        github: "https://github.com/jackquinlan/blueprint",
        icon: <Shapes className="h-4 w-4" />,
    },
    {
        name: "Workspace",
        desc: "A project management tool that helps you organize your work, collaborate with your team, and get more done.",
        website: "https://work.jackquinlan.co/",
        github: "https://github.com/jackquinlan/workspace",
        icon: <CrumpledPaperIcon className="h-4 w-4" />,
    }
];
