import Resume from "../../assets/documents/Resume.pdf";
import CirclingIcons from "./CirclingIcons";
import "./CirclingIconsIntro.scss";

import { useEffect, useRef, useState } from "react";

const CirclingIconsIntro = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isWrapping, setIsWrapping] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const resizeObserver = new ResizeObserver(() => {
            if (!container || container.children.length === 0) return;

            // Detect if wrap is happening by using the offsetTops of each child
            const children = container.children;
            let tempIsWrapping = false;
            const firstChildTop = (children[0] as HTMLElement).offsetTop;
            for (let i = 0; i < children.length; i++) {
                const child = children[i] as HTMLElement;
                if (child.offsetTop != firstChildTop) {
                    tempIsWrapping = true;
                }
            }
            console.log("Wrapping:", tempIsWrapping);
            setIsWrapping(tempIsWrapping);
        });
        if (container) {
            resizeObserver.observe(container);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="circling-icons-intro" ref={containerRef}>
            <CirclingIcons numCircles={8} />
            <div className={"intro"}>
                <div className="text-center title">Riki Fameli</div>
                <div className="text-center subtitle">
                    full stack software engineer
                </div>
                <div className={`landing-list nav-font ${isWrapping ? 'row-lst' : 'col-lst'}`}>
                    <div>
                        <a href={Resume} target="_blank">
                            resume
                        </a>
                    </div>
                    <div>
                        <a href="mailto:rikifameli@gmail.com" target="_blank">
                            mail
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/r-fameli" target="_blank">
                            github
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://linkedin.com/in/riki-fameli/"
                            target="_blank"
                        >
                            linkedin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CirclingIconsIntro;
