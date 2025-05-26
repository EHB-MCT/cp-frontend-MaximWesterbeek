import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const VerticalTextAppearT = ({ imgUrl }: { imgUrl: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    // Reveal tex when the image has entered 85% of the viewport
    const showText = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const springShowText = useSpring(showText, { stiffness: 100, damping: 20 });

    // Translate, enlarge and reveal image upward as user scrolls
    const scale = useTransform(scrollYProgress, [1, 0], [1, 0.97]);
    const positionY = useTransform(scrollYProgress, [0, .75], ["5vh", "0vh"]);
    const imageOpacity = useTransform(scrollYProgress, [0.75, 0.05], [1, 0]);

    return (
        <div
            className="vertical-scroll">
            <div className="vertical-scroll__sticky-container">
                <motion.div
                    ref={ref}
                    className="vertical-scroll__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        opacity: imageOpacity,
                        scale,
                        y: positionY,
                    }}
                >
                    <motion.div
                        className="vertical-scroll__sticky-container__bg-image__text-content"
                        style={{
                            opacity: springShowText,
                        }}
                    >
                        <p>klop-klop klop-klop..</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
