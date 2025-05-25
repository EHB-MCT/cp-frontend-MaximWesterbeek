import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VerticalScrollT = ({ imgUrl }: { imgUrl: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [1, 0], [1, 0.97]);
    const positionY = useTransform(scrollYProgress, [0, .75], ["5vh", "0vh"]);
    const imageOpacity = useTransform(scrollYProgress, [0.75, 0.05], [1, 0]);

    return (
        <div className="vertical-scroll">
            <div className="vertical-scroll__sticky-container">

                <motion.div
                    ref={ref}
                    className="vertical-scroll__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                        opacity: imageOpacity,
                        scale: scale,
                        y: positionY,
                    }}
                />

            </div>
        </div>
    );
};
