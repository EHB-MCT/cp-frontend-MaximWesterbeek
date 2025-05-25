import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VerticalImageScrollT = ({ imgUrl }: { imgUrl: string; }) => {
    const ref = useRef(null);

    // Hook into scroll progress of containerRef
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"], // Pin for height of container
    });

    // Translate image upward as user scrolls
    const y = useTransform(scrollYProgress, [0.25, 0.05], ["0%", "-54%"]); // Adjust -50% if image is taller

    return (
        <div ref={ref} className="image-scroll">
            <div className="image-scroll__sticky-container">
                <motion.img
                    className="image-scroll__sticky-container__image"
                    src={imgUrl}
                    alt="Scrolling image"
                    style={{ y }} // y is animated scroll value
                />
            </div>
        </div>
    );
};
