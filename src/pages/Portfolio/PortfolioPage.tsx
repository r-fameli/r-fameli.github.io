import { useRef } from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import StarFieldBack from "../../components/StarFieldBack/StarFieldBack";

function PortfolioPage() {
    const topSentinel = useRef<HTMLDivElement | null>(null);
    const aboutSentinel = useRef<HTMLDivElement | null>(null);
    const experienceSentinel = useRef<HTMLDivElement | null>(null);
    const projectsSentinel = useRef<HTMLDivElement | null>(null);

    const navItems = [
        {
            sentinel: topSentinel,
            key: "top",
            label: "top",
        },
        {
            sentinel: aboutSentinel,
            key: "about",
            label: "about",
        },
        {
            sentinel: experienceSentinel,
            key: "experience",
            label: "experience",
        },
        {
            sentinel: projectsSentinel,
            key: "projects",
            label: "projects",
        },
    ];

    return (
        <body>
            <StarFieldBack>
                <NavMenu navItems={navItems} />
                <Landing sentinelRef={topSentinel} />
                <About sentinelRef={aboutSentinel} />
                <Experience sentinelRef={experienceSentinel} />
                <Projects sentinelRef={projectsSentinel} />
            </StarFieldBack>
        </body>
    );
}

export default PortfolioPage;
