import { useState } from "react";
import "./CirclingIconsIntro.scss";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

const radians = (degrees: number) => degrees * (Math.PI / 180);

type Props = {
    numCircles: number;
};

const CirclingIcons = ({ numCircles }: Props) => {
    // Placing Constants, in cqw and degrees
    const CENTER = 20; // cqw
    const DIST_TO_CENTER = 15; // cqw
    const ROTATION_OFFSET = 10; // degrees
    const DIST_X_OFFSET = 3; // cqw
    const DIST_Y_OFFSET = -12; // cqw
    // Velocity Variables
    // velocity units are degrees per second
    const VELOCITY_BASE = 15;

    // STATES
    const [velocity, setVelocity] = useState(VELOCITY_BASE);
    const [angleOffset, setAngleOffset] = useState(0);

    const getCirclePositions = (numCircles: number, offset: number) => {
        const angleSteps = 360 / numCircles;
        const positions = new Array(numCircles);
        const rotationOffsetRadians = radians(ROTATION_OFFSET);
        for (let i = 0; i < numCircles; i++) {
            const angle = (offset + angleSteps * i) % 360;

            const xBeforeRot =
                (DIST_TO_CENTER + DIST_X_OFFSET) * Math.cos(radians(angle));
            const yBeforeRot =
                (DIST_TO_CENTER + DIST_Y_OFFSET) * Math.sin(radians(angle));

            // Apply rotation to tilt the moons on an axis
            const cosRot = Math.cos(rotationOffsetRadians);
            const sinRot = Math.sin(rotationOffsetRadians);
            const x = CENTER + (xBeforeRot * cosRot - yBeforeRot * sinRot);
            const y = CENTER + (xBeforeRot * sinRot + yBeforeRot * cosRot);
            // z-index
            const z = angle < 180 ? 5 : -1;
            positions[i] = [x, y, z];
        }
        return positions;
    };

    useAnimationFrame((deltaTime: number) => {
        if (Math.abs(velocity) > Math.abs(VELOCITY_BASE)) {
            setVelocity((velocity) => velocity * 0.99 * (deltaTime * 0.001));
        } else if (velocity < Math.abs(VELOCITY_BASE)) {
            setVelocity(VELOCITY_BASE);
        }
        // Adjust the offset of the circles based on time elapsed
        setAngleOffset(
            (angleOffset) => angleOffset + velocity * deltaTime * 0.001,
        );
    });

    const circlePositions = getCirclePositions(numCircles, angleOffset);

    return (
        <div className="CirclingIcons">
            <div className="big-circle" />
            <ul className="little-circles">
                {circlePositions.map(([x, y, zIndex], i) => (
                    <li
                        key={i}
                        style={{
                            // transform: `translate3d(${x}px, ${y}px, 0)`,
                            transform: `translate3d(${x}cqw, ${y}cqw, 0)`,
                            transition: "transform 0.1s ease-out",
                            zIndex: zIndex,
                        }}
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default CirclingIcons;
