import * as React from "react";
import Link from "next/link";

import { DesktopIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Shell } from "@/components/shell";
import { PROJECTS, type Project } from "@/config/projects";

export function ProjectList() {
    return (
        <React.Fragment>
            {PROJECTS.map((project: Project) => (
                <ProjectShell key={project.name} project={project} />
            ))}
        </React.Fragment>
    );
}

export function ProjectShell({ project }: { project: Project }) {
    return (
        <Shell className="p-2 pt-1">
            <div className="space-y-1 leading-tight">
                <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-1 font-medium">
                        {project.icon && project.icon}
                        {project.name}
                    </h1>
                    <div className="flex items-center gap-1">
                        <Link
                            className="rounded-md hover:text-foreground"
                            href={project.github}
                            target="_blank"
                        >
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="p-1 rounded-md hover:bg-accent">
                                        <GitHubLogoIcon className="h-4 w-4" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>Github</TooltipContent>
                            </Tooltip>
                        </Link>
                        {project.website && (
                            <Link
                                className="rounded-md p-1 hover:text-foreground"
                                href={project.website}
                                target="_blank"
                            >
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className="p-1 rounded-md hover:bg-accent">
                                            <DesktopIcon className="h-4 w-4" />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>Live Website</TooltipContent>
                                </Tooltip>
                            </Link>
                        )}
                    </div>
                </div>
                <p className="text-xs text-zinc-500">{project.desc}</p>
            </div>
        </Shell>
    );
}
