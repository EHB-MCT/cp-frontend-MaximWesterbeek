import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HorizontalBirdFlying = ({ imgUrl, birdUrl }: { imgUrl: string; birdUrl: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"], // Adjust to your liking
    });

    // const bgOpacity = useTransform(scrollYProgress, [1, 0], [1, 0.5]);
    const birdX = useTransform(scrollYProgress, [0, 0.5], ["5vw", "55vw"]);

    return (
        <div ref={ref} className="bird-flying">

            <div className="bird-flying__sticky-container">
                <motion.div
                    className="bird-flying__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                    }}
                />

                <motion.div
                    className="bird-flying__sticky-container__bird-image"
                    style={{
                        backgroundImage: `url(${birdUrl})`,
                        x: birdX,
                    }}
                />
            </div>

            <div style={{ height: "200vh" }} />
        </div>
    );
};
