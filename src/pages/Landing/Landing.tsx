import CirclingIconsIntro from "../../components/CirclingIcons/CirclingIconsIntro";
import "./Landing.scss";
import type { RefObject } from "react";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>;
};

const Landing = ({ sentinelRef }: Props) => {
    return (
        <div className="landing page" id="top" ref={sentinelRef}>
            <CirclingIconsIntro />
        </div>
    );
};

export default Landing;
