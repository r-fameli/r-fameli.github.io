import { useRef } from "react";
import "./ProjectGallery";

type Props = {
    id: number;
    source: string;
    type: "img" | "video";
};

const MediaCard = ({ id, type, source }: Props) => {
    const vidRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        vidRef.current!.pause();
    };
    
    const handleMouseLeave = () => {
        vidRef.current!.play();
    };
    return (
        <div
            className="media-card"
            id={`media-${id}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {type == "video" ? (
                <video ref={vidRef} muted loop src={source} autoPlay />
            ) : (
                <img src={source}></img>
            )}
        </div>
    );
};

export default MediaCard;
