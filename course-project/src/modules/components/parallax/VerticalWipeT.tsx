import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const VerticalWipeT = ({ topImage, bottomImage, text, heading, showStart, showEnd }: { topImage: string; bottomImage: string; text: string; showStart: boolean; showEnd: boolean; heading: string }) => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const clipPathTop = useTransform(scrollYProgress, [0, 1], ["inset(0% 0% -100% 0%)", "inset(0% 0% 180% 0%)"]);
    const clipPathBottom = useTransform(scrollYProgress, [0, 1], ["inset(200% 0% 0% 0%)", "inset(-100% 0% -0% 0%)"]);
    const barY = useTransform(scrollYProgress, [0, 1], ["125vh", "122vh"]);

    return (
        <div ref={ref} className="vertical-wipe">
            {/* Top Image */}
            <motion.div
                className="vertical-wipe__bg-image-top"
                style={{
                    backgroundImage: `url(${topImage})`,
                    clipPath: clipPathTop,
                }}
            >
                {showStart && (
                    <div className="vertical-wipe__bg-image-top__title-container">
                        <p className="vertical-wipe__bg-image-top__title-container__title">{heading}</p>
                    </div>
                )}
            </motion.div>

            {/* Moving Black Bar */}
            <motion.div
                className="vertical-wipe__story-bar"
                style={{ y: barY }}
            >
                {text}
            </motion.div>

            {/* Bottom Image */}
            <motion.div
                className="vertical-wipe__bg-image-bottom"
                style={{
                    backgroundImage: `url(${bottomImage})`,
                    clipPath: clipPathBottom,
                }}
            >
                {showEnd && (
                    <div className="vertical-wipe__bg-image-bottom__title-container">
                        <p className="vertical-wipe__bg-image-bottom__title-container__title">{heading}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

// return (
//     <div ref={ref} className="vertical-wipe">
//         {/* Top Image */}
//         <motion.div
//             className="vertical-wipe__bg-image"
//             style={{
//                 backgroundImage: `url(${topImage})`,
//                 clipPath: clipPathTop,
//             }}
//         >
//             {showStart && (
//                 <div className="vertical-wipe__bg-image__title-container">
//                     <p className="vertical-wipe__bg-image__title-container__title">{heading}</p>
//                 </div>
//             )}
//         </motion.div>

//         {/* Moving Black Bar */}
//         <motion.div
//             className="vertical-wipe__story-bar"
//             style={{ y: barY }}
//         >
//             {text}
//         </motion.div>

//         {/* Bottom Image */}
//         <motion.div
//             className="vertical-wipe__bg-image"
//             style={{
//                 backgroundImage: `url(${bottomImage})`,
//                 clipPath: clipPathBottom,
//             }}
//         >
//             {showEnd && (
//                 <div className="vertical-wipe__bg-image__title-container">
//                     <p className="vertical-wipe__bg-image__title-container__title">{heading}</p>
//                 </div>
//             )}
//         </motion.div>
//     </div>
// );