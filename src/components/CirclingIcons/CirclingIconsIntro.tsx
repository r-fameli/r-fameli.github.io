import Resume from "../../assets/documents/Resume.pdf";
import CirclingIcons from "./CirclingIcons";
import './CirclingIconsIntro.scss';

const CirclingIconsIntro = () => {
    return <div className="circling-icons-intro">
        <CirclingIcons numCircles={8} />
        <div className="intro">
            <div className="text-center title">Riki Fameli</div>
            <div className="text-center subtitle">
                full stack software engineer
            </div>
            <div className="landing-list nav-font">
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
}


export default CirclingIconsIntro;