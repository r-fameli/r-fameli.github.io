import MediaCard from "./MediaCard";
import type { GalleryItemDetails } from "./ProjectGallery";

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
                        {item1.tags && (
                            <div className="tag-group">
                                {item1.tags.map((tag) => (
                                    <span className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                        {item1.links && (
                            <div className="tag-group">
                                {item1.links.map(({ label, value }) => (
                                    <a href={value} target="_blank">
                                        <span className="link-tag">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
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
                        {item2.tags && (
                            <div className="tag-group">
                                {item2.tags.map((tag) => (
                                    <span className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                        {item2.links && (
                            <div className="tag-group">
                                {item2.links.map(({ label, value }) => (
                                    <a href={value} target="_blank">
                                        <span className="link-tag">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryRow;