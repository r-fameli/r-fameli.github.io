import VisualTransformersDemo from "../../assets/images/visual-transformers-poster.jpg";
import JournalTexterDemo from "../../assets/videos/journaltexter-demo.mp4";
import SockyDemo from "../../assets/videos/socky-demo.mp4";
import TronDemo from "../../assets/videos/tron-demo.mp4";
import CCVScriptDemo from "../../assets/videos/ccv-script-demo.mp4";
import OldPortfolioDemo from "../../assets/videos/portfolio-2021-demo.mp4";
import {
    ccvScriptDescription,
    journalTexterDescription,
    newPortfolioDescription,
    oldPortfolioDescription,
    sockyDescription,
    tronDescription,
    visualTransformersDescription,
} from "./ProjectDescriptions";
import "./ProjectGallery.scss";
import GalleryRow from "./GalleryRow";

type LabeledItem = {
    label: string;
    value: string;
};

export type GalleryItemDetails = {
    id: number;
    type: "video" | "img";
    source?: string;
    caption: string;
    description: React.ReactNode;
    tags?: string[];
    links?: LabeledItem[];
};

const ProjectGallery = () => {
    const sockyItem: GalleryItemDetails = {
        id: 1,
        type: "video",
        source: SockyDemo,
        caption: "socky",
        description: sockyDescription,
        tags: ["python", "pygame", "löve"],
        links: [{ label: "repo", value: "https://github.com/r-fameli/Socky" }],
    };

    const tronItem: GalleryItemDetails = {
        id: 2,
        type: "video",
        source: TronDemo,
        caption: "tron bot",
        description: tronDescription,
        tags: ["python", "numpy"],
        links: [{ label: "repo", value: "" }],
    };

    const jtItem: GalleryItemDetails = {
        id: 3,
        type: "video",
        source: JournalTexterDemo,
        caption: "journaltexter",
        description: journalTexterDescription,
        tags: ["java", "spark", "react", "sqlite"],
        links: [
            {
                label: "repo",
                value: "https://github.com/r-fameli/journaltexter",
            },
        ],
    };

    const vtItem: GalleryItemDetails = {
        id: 4,
        type: "img",
        source: VisualTransformersDemo,
        caption: "visual transformers",
        description: visualTransformersDescription,
        tags: ["python", "numpy", "tensorflow", "keras"],
        links: [
            {
                label: "writeup",
                value: "https://github.com/ethanga12/dl-final-project/tree/main/deliverables",
            },
            {
                label: "repo",
                value: "https://github.com/ethanga12/dl-final-project",
            },
        ],
    };

    const oldPortfolioItem: GalleryItemDetails = {
        id: 5,
        type: "video",
        source: OldPortfolioDemo,
        caption: "portfolio (2021)",
        description: oldPortfolioDescription,
        tags: ["react", "figma", "styled-components"],
        links: [
            {
                label: "repo",
                value: "https://github.com/r-fameli/old-portfolio",
            },
        ],
    };

    const newPortfolioItem: GalleryItemDetails = {
        id: 6,
        type: "video",
        caption: "portfolio (2026)",
        description: newPortfolioDescription,
        tags: ["react", "figma", "scss"],
        links: [
            {
                label: "repo",
                value: "https://github.com/r-fameli/r-fameli.github.io",
            },
        ],
    };

    const ccvScriptItem: GalleryItemDetails = {
        id: 7,
        type: "video",
        source: CCVScriptDemo,
        caption: "ccv account creation script",
        description: ccvScriptDescription,
        tags: ["selenium", "python"],
        links: [
            {
                label: "repo",
                value: "https://github.com/r-fameli/ccv_automation",
            },
        ],
    };

    return (
        <div className="video-gallery">
            <GalleryRow items={[sockyItem, tronItem]} />
            <GalleryRow items={[jtItem, vtItem]} />
            <GalleryRow items={[ccvScriptItem, oldPortfolioItem]} />
            <GalleryRow items={[newPortfolioItem]} />
        </div>
    );
};

export default ProjectGallery;
