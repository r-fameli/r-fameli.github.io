import "./ProjectGallery.scss";
import SockyDemo from "../../assets/videos/socky-demo.mp4";
import TronDemo from "../../assets/videos/tron-demo.mp4";
import JournalTexterDemo from "../../assets/videos/journaltexter-demo.mp4";
import VisualTransformersDemo from "../../assets/images/visual-transformers-poster.jpg";
import MediaCard from "./MediaCard";
import { journalTexterDescription, newPortfolioDescription, oldPortfolioDescription, sockyDescription, tronDescription, visualTransformersDescription } from "./ProjectDescriptions";

type GalleryItemDetails = {
    id: number;
    type: "video" | "img";
    source?: string;
    caption: string;
    description: React.ReactNode;
    tags?: string[];
    repoLink?: string;
    deployedLink?: string;
};

type RowProps = {
    item1?: GalleryItemDetails;
    item2?: GalleryItemDetails;
};

const GalleryRow = ({ item1, item2 }: RowProps) => {
    return (
        <div className="gallery-row">
            <div className="flex-col-start">
                {item1 && (
                    <div className="gallery-item">
                        {item1.source && (
                            <MediaCard
                                id={item1.id}
                                source={item1.source}
                                type={item1.type}
                            />
                        )}
                        <h3>{item1.caption}</h3>
                        <div className="gallery-description">
                            {item1.description}
                        </div>
                        {item1.tags && <div className="tag-group">
                            {item1.tags.map((tag) => (
                                <span className="tech-tag">{tag}</span>
                            ))}
                        </div>}
                    </div>
                )}
            </div>
            <div className="flex-col-end">
                {item2 && (
                    <div className="gallery-item">
                        {item2.source && (
                            <MediaCard
                                id={item2.id}
                                source={item2.source}
                                type={item2.type}
                            />
                        )}
                        <h3>{item2.caption}</h3>
                        <div className="gallery-description">
                            {item2.description}
                        </div>
                        {item2.tags && <div className="tag-group">
                            {item2.tags.map((tag) => (
                                <span className="tech-tag">{tag}</span>
                            ))}
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    const sockyItem: GalleryItemDetails = {
        id: 1,
        type: "video",
        source: SockyDemo,
        caption: "socky",
        description: sockyDescription,
        tags: ['python', 'pygame', 'löve']
    };

    const tronItem: GalleryItemDetails = {
        id: 2,
        type: "video",
        source: TronDemo,
        caption: "tron bot",
        description: tronDescription,
        tags: ['python', 'numpy']
    };

    const jtItem: GalleryItemDetails = {
        id: 3,
        type: "video",
        source: JournalTexterDemo,
        caption: "journaltexter",
        description: journalTexterDescription,
        tags: ['java', 'spark', 'react', 'sqlite']
    };

    const vtItem: GalleryItemDetails = {
        id: 4,
        type: "img",
        source: VisualTransformersDemo,
        caption: "visual transformers",
        description: visualTransformersDescription,
        tags: ['python', 'numpy', 'tensorflow', 'keras']
    };

    const oldPortfolioItem: GalleryItemDetails = {
        id: 5,
        type: 'video',
        caption: 'portfolio (2021)',
        description: oldPortfolioDescription,
        tags: ['react', 'figma', 'styled-components']
    }

    const newPortfolioItem: GalleryItemDetails = {
        id: 6,
        type: 'video',
        caption: 'portfolio (2026)',
        description: newPortfolioDescription,
        tags: ['react', 'figma', 'scss']
    }

    return (
        <div className="video-gallery">
            <GalleryRow item1={sockyItem} item2={tronItem} />
            <GalleryRow item1={jtItem} item2={vtItem} />
            <GalleryRow item1={oldPortfolioItem} item2={newPortfolioItem} />
        </div>
    );
};

export default ProjectGallery;
