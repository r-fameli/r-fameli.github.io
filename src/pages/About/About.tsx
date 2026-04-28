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
                            University alumnus. I came to software engineering
                            because I wanted to build things that make people's lives easier, and I love creating fluid web experiences
                            that creatively solve people's problems. Whether it's automating
                            outdated processes, improving UI/UX, or fixing persistent issues, I'm always
                            happy to find solutions and follow through with them. I'm also passionate
                            about teaching others, learning new skills, and about human rights in the age of AI``.
                        </p>
                        <br />
                        <p>
                            In the past, I was a high school wrestling captain, an
                            {' '}<a href="https://www.youtube.com/watch?v=nv531lIbPmk" target="_blank">aerial hoop coach</a>{' '}
                            for Brown Aerial Acrobatics, and I've taken an assortment of dance and performance
                            courses. I really enjoy physically active hobbies, and I'd love to hear about yours!
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
