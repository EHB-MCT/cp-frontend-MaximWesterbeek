import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const HorizontalScrollT = ({ topImage, bottomImage, text1, text2 }: { topImage: string; bottomImage: string; text1: string; text2: string }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Transformations for the top and bottom images based on scroll progress
    const topX = useTransform(scrollYProgress, [0.05, 0.6], ["0%", "-100%"]);
    const bottomX = useTransform(scrollYProgress, [0.05, 0.6], ["100%", "0%"]);

    // Text scrolls with images, but starts a bit later than images to create a delay effect.
    const textX = useTransform(scrollYProgress, [0.1, .55], ["0%", "-100%"]);

    // Create audio instance
    const audio = new Audio(`${import.meta.env.BASE_URL}assets/audio/sfx_frog-sound.mp3`);
    const handlePlaySound = () => {
        audio.currentTime = 0; // reset if already playing
        audio.play();
    };

    return (
        <div ref={ref} className="horizontal-scroll">
            {/* Sticky container that stays fixed while scrollYProgress updates */}
            <div className="horizontal-scroll__sticky-container">
                <motion.div
                    className="horizontal-scroll__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${bottomImage})`,
                        x: bottomX,
                        zIndex: 0,
                    }}
                />

                <motion.div
                    className="horizontal-scroll__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${topImage})`,
                        x: topX,
                        zIndex: 1,
                    }}
                >
                    <div className="horizontal-scroll__sticky-container__bg-image__clickable-box right" onClick={handlePlaySound} />
                    <div className="horizontal-scroll__sticky-container__bg-image__clickable-box left" onClick={handlePlaySound} />
                </motion.div>

                <motion.div
                    className="horizontal-scroll__sticky-container__seam-text-container"
                    style={{ x: textX }}
                >
                    <p className="horizontal-scroll__sticky-container__seam-text-container__seam-text1">{text1}</p>
                    <p className="horizontal-scroll__sticky-container__seam-text-container__seam-text2">{text2}</p>
                </motion.div>
            </div>
        </div>
    );
};
