import type { RefObject } from "react";
import "./About.scss";
import Headshot from "../../assets/photos/headshot-2026.png";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>;
};

const About = ({ sentinelRef }: Props) => {
    return (
        <div className="about-page" id="about" ref={sentinelRef}>
            <div className="about-container">
                <div className="about-row">
                    <img className="about-image" src={Headshot} />
                    <div>
                        <h1>about me</h1>
                        <p className="about-text">
                            Hi, I'm Riki! I'm a full-stack developer who
                            previously worked at Microsoft and a Brown
                            University alumnus. Much of my experience is in web
                            development, but I'm willing and able to learn all
                            sorts of technologies to make user experiences that
                            feel fluid and creative. I'm passionate about user
                            experience, human rights in the 21st century, and
                            work that challenges me to learn quickly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
