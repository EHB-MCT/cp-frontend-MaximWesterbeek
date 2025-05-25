import { useRef } from "react";

export const VerticalOverlayT = ({ topImage, bottomImage, heading, subHeading }: { topImage: string; bottomImage: string; heading: string; subHeading: string; }) => {
    const ref = useRef(null);

    return (
        <div ref={ref} style={{ position: "relative", height: "200vh" }}>
            {/* Bottom Image (visible once top image scrolls away) */}
            <div
                style={{
                    backgroundImage: `url(${topImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    zIndex: 0,

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}

            >
                <div
                    className='parallax-title'
                    style={{
                        position: "sticky",

                        // height: `calc(100vh - 110px)`,
                        width: "600px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <p className="overlaySubHeading">{subHeading}</p>
                    <p className="overlayHeading">{heading}</p>
                </div>
            </div>


            {/* Top Image (sticky, scrolls off eventually) */}
            <div
                style={{
                    backgroundImage: `url(${bottomImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    zIndex: 1,
                }}
            />
        </div >
    );
};