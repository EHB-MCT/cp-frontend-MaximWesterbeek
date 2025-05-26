import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HorizontalDrifting = ({ imgUrl, driftUrl }: { imgUrl: string; driftUrl: string; }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const birdX = useTransform(scrollYProgress, [0, 1], ["20vw", "35vw"]);

    // Create audio instance (replace with your own sound file)
    const audio = new Audio(`${import.meta.env.BASE_URL}assets/audio/sfx_frog-sound.mp3`);
    const handlePlaySound = () => {
        audio.currentTime = 0; // reset if already playing
        audio.play();
    };

    return (
        <div ref={ref} className="drifting">
            <div className="drifting__sticky-container">
                <motion.div
                    className="drifting__sticky-container__bg-image"
                    style={{
                        backgroundImage: `url(${imgUrl})`,
                    }}
                />

                <motion.div
                    className="drifting__sticky-container__drift-image"
                    style={{
                        backgroundImage: `url(${driftUrl})`,
                        x: birdX,
                    }}
                />

                {/* New clickable box */}
                <div className="drifting__sticky-container__clickable-box" onClick={handlePlaySound} />
            </div>

            <div style={{ height: "200vh" }} />
        </div>
    );
};
