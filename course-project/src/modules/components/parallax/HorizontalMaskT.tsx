import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const HorizontalMaskT = ({ topImage, bottomImage, text1, text2 }: { topImage: string; bottomImage: string; text1: string; text2: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const clipPathTop = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% -100% 0% 0%)", "inset(0% 200% 0% 0%)"]
    );
    const clipPathBottom = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 0% 0% 200%)", "inset(0% 0% 0% -100%)"]
    );

    return (
        <div ref={ref} className="horizontal-mask">
            {/* Top Image */}
            <motion.div
                className="horizontal-mask__sticky-image"
                style={{
                    backgroundImage: `url(${topImage})`,
                    clipPath: clipPathTop,
                }}
            >
                <p className="horizontal-mask__sticky-image__overlay-text" style={{ top: 20, left: 20 }}>{text1}</p>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
                className="horizontal-mask__sticky-image inset"
                style={{
                    backgroundImage: `url(${bottomImage})`,
                    clipPath: clipPathBottom,
                }}
            >
                <p className="horizontal-mask__sticky-image__overlay-text" style={{ top: 20, right: 20 }}>{text2}</p>
            </motion.div>
        </div>
    );
};