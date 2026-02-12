import type { RefObject } from "react";
import ProjectGallery from "../NewProjects/ProjectGallery";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>;
};

const Projects = ({ sentinelRef }: Props) => {
    return (
        <div className="page" id="projects" ref={sentinelRef}>
            <h1 className="text-center page-title">
                my projects
            </h1>
            <ProjectGallery />
        </div>
    );
};

export default Projects;
