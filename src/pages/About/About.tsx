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
                            Hi, I'm Riki! I'm a full-stack developer
                            previously at Microsoft and a Brown
                            University alumnus. Much of my experience is in web
                            development, but I'm willing and able to learn all
                            sorts of technologies to build clever solutions that feel fluid.
                            In my work, I'm passionate about making both users and developers happy,
                            teaching what I've learned to my peers, and making things I'm proud of.
                            I'm passionate about teaching, user experience, human rights,
                            and all sorts of physical hobbies ranging from aerial acrobatics to jiu jitsu.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
