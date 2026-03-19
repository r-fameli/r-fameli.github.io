import MediaCard from "./MediaCard";
import type { GalleryItemDetails } from "./ProjectGallery";

type RowProps = {
    items: GalleryItemDetails[];
};

const GalleryRow = ({ items }: RowProps) => {
    return (
        <div className="gallery-row">
            {items.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`gallery-item ${index % 2 === 0 ? 'flex-col-start' : 'flex-col-end'}`}
                >
                    {item.source && (
                        <MediaCard
                            id={item.id}
                            source={item.source}
                            type={item.type}
                        />
                    )}
                    <h3>{item.caption}</h3>
                    <div className="gallery-description">
                        {item.description}
                    </div>
                    {item.tags && (
                        <div className="tag-group">
                            {item.tags.map((tag) => (
                                <span className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                    {item.links && (
                        <div className="tag-group">
                            {item.links.map(({ label, value }) => (
                                <a href={value} target="_blank">
                                    <span className="link-tag">
                                        {label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GalleryRow;
