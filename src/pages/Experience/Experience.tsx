import type { RefObject } from "react";
import FloatingBox from "../../components/FloatingBox/FloatingBox";

type Props = {
    sentinelRef: RefObject<HTMLDivElement | null>;
};

const Experience = ({ sentinelRef }: Props) => {
    const msftContent = (
        <div>
            <p>
                I architected and built out a full-stack web application called
                SKULens to replace our legacy python scripts and Word Docs and analyze datacenter
                hardware performance. I built the Typescript React frontend and rewrote the original script into a serverless
                Python web API using Azure Durable Functions. 
            </p>
        </div>
    );

    const msftInternContent = (
        <div>
            I developed highly customizable charting interfaces using React
            Typescript and Ant Design Charts to enable storage engineers to view
            trends and anomalies in logging metrics at a glance.
        </div>
    );

    const brownTAContent = (
        <div>
            <p>
                I taught students foundational concepts of functional programming at lab
                sessions and office hours. Also helped develop and redesign the course website each semester,
                especially for the <a href="https://cs.brown.edu/courses/csci0111/spring2022/index.html" target="_blank">Spring 2022 semester website</a>,
                where I made Windows 2000-style draggable containers.
            </p>
        </div>
    );

    const ccvDescription = (
        <div>
            <p>
                I developed an automation script in Python utilizing Selenium
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
                    datesString={"Aug '23 - Sept '25"}
                    content={msftContent}
                />
                <FloatingBox
                    title={"Microsoft, Azure Storage"}
                    subtitle={"Software Engineering Intern"}
                    datesString={"Jun '22 - Sep '22"}
                    content={msftInternContent}
                />
                <FloatingBox
                    title={"Brown University Dept. of Computer Science"}
                    subtitle={"Undergraduate Teaching Assistant"}
                    datesString={"Jun '21 - Dec '23"}
                    content={brownTAContent}
                />
                <FloatingBox
                    title={"Brown University Center for Computation"}
                    subtitle={"User Services Intern"}
                    datesString={"Feb '21 - Aug '21"}
                    content={ccvDescription}
                />
            </div>
        </div>
    );
};

export default Experience;
