import { useEffect, useState, type RefObject } from "react";

const useIntersection = (sentinelRef: RefObject<HTMLDivElement | null>, observerOptions: object) => {
    const [intersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                setIntersecting(true);
            } else {
                setIntersecting(false);
            }
        }, observerOptions);

        if (sentinelRef && sentinelRef.current !== null) {
            observer.observe(sentinelRef.current);
        }
    }, [sentinelRef, observerOptions]);
    return intersecting;
};


export default useIntersection;