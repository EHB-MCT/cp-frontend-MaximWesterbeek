import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VerticalImageScrollT = ({ imgUrl }: { imgUrl: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Translate image upward as user scrolls
    const y = useTransform(scrollYProgress, [0.25, 0.05], ["0%", "-54%"]);

    return (
        <div ref={ref} className="image-scroll">
            <div className="image-scroll__sticky-container">
                <motion.img
                    className="image-scroll__sticky-container__image"
                    src={imgUrl}
                    alt="Scrolling image"
                    style={{ y }}
                />
            </div>
        </div>
    );
};
