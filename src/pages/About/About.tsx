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
                    <span className="about-text">
                        <h1>about me</h1>
                        <p>
                            Hey there! I'm Riki. I'm a full-stack developer
                            previously at Microsoft and a Brown
                            University alumnus. I love building web experiences that
                            feel fluid and creative, and I'm eager to push the boundaries of what
                            web/frontend development looks like. In my work, I enjoy making both users
                            and developers happy and building things
                            that make others wonder "how did he do that?". I'm also passionate
                            about teaching others, learning new skills, human rights, and all sorts of physical hobbies
                            ranging from aerial acrobatics to jiu jitsu.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
