import * as React from "react";

import { Header } from "@/components/header";
import { ProjectList } from "@/components/project-list";

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main className="mt-4 flex w-full flex-col gap-2 text-left md:w-1/2">
                <h1 className="text-left">Projects</h1>
                <ProjectList />
            </main>
        </React.Fragment>
    );
}
