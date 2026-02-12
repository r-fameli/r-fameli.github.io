import type { RefObject } from "react";
import FloatingBox from "../../components/FloatingBox/FloatingBox";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>;
};

const Experience = ({ sentinelRef }: Props) => {
    const msftContent = (
        <div>
            <p>
                Architected and built a full-stack web application ("SKULens")
                through a serverless Azure Durable Functions API and a
                Typescript React static web frontend to migrate away from legacy
                python scripts and display metrics, charts, and reports related
                to hardware testing.
            </p>
            <p>
                Coordinated the end-to-end sign-off process on several Azure
                Premium SSD V2 hardware SKUs.
            </p>
        </div>
    );

    const msftInternContent = (
        <div>
            Developed highly customizable charting interfaces using React
            Typescript and Ant Design Charts to enable storage engineers to view
            trends and anomalies in logging metrics at a glance.
        </div>
    );

    const brownTAContent = (
        <div>
            <p>
                Assisted staff in redesigning course website in
                HTML/CSS/JS/Figma to fit early 2000's theme for the spring 2022
                semester.
            </p>
            <p>
                Taught students foundational concepts of functional programming
                and data manipulation at lab sessions and teaching hours
            </p>
        </div>
    );

    const ccvDescription = (
        <div>
            <p>
                Developed an automation script in Python utilizing Selenium
                WebDriver to open a browser and assign privileges through
                various web interfaces.
            </p>
            <p></p>
        </div>
    );

    return (
        <div className="page" id="experience" ref={sentinelRef}>
            <h1 className="text-center page-title">my experience</h1>
            <div className="floating-box-container">
                <FloatingBox
                    title={"Microsoft, Azure Storage"}
                    subtitle={"Software Engineer"}
                    datesString={"Aug 2023 - Sept 2025"}
                    content={msftContent}
                />
                <FloatingBox
                    title={"Microsoft, Azure Storage"}
                    subtitle={"Software Engineering Intern"}
                    datesString={"Jun 2022 - Sep 2022"}
                    content={msftInternContent}
                />
                <FloatingBox
                    title={"Brown University Dept. of Computer Science"}
                    subtitle={"Undergraduate Teaching Assistant"}
                    datesString={"Jun 2021 - Dec 2023"}
                    content={brownTAContent}
                />
                <FloatingBox
                    title={"Brown University Center for Computation"}
                    subtitle={"User Services Intern"}
                    datesString={"Feb 2021 - Aug 2021"}
                    content={ccvDescription}
                />
            </div>
        </div>
    );
};

export default Experience;
