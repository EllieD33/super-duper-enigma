import React, { ReactElement, useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import styles from "./Particles.module.css";

export interface ParticlesProps {}

const Particles = ({}: ParticlesProps): ReactElement => {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadAll(tsParticles).then(() => {
            if (!particlesRef.current) return;

            tsParticles.load({
                id: "tsparticlesCustom",
                options: {
                    // autoPlay: true,
                    background: {
                        color: "transparent",
                    },
                    fullScreen: {
                        enable: false,
                    },
                    detectRetina: true,
                    fpsLimit: 60,
                    style: {
                        width: "100%",
                        height: "100%",
                    },
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            resize: {
                                enable: true,
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 2,
                                opacity: 8,
                                size: 6,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 300, // number of dots
                        },
                        color: {
                            value: "#fc0fc7",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            // of dots
                            value: {
                                min: 0.05,
                                max: 0.4,
                            },
                            animation: {
                                enable: true,
                                speed: 1,
                                startValue: "random",
                                mode: "auto",
                            },
                        },
                        size: {
                            value: 1, // size of dots
                        },
                        links: {
                            enable: true, // lines between dots
                            distance: 30,
                            color: "#fc0fc7", // color of lines between dots
                            opacity: 0.4,
                            width: 1,
                            // frequency: 1,
                        },
                        move: {
                            enable: true,
                            speed: 0.5, // Speed lined move at
                            direction: "none",
                            outModes: {
                                default: "bounce",
                            },
                            random: false, // Changes line movement, true they move less
                        },
                    },
                    polygon: {
                        draw: {
                            enable: true,
                            stroke: {
                                color: {
                                    value: "#00bdff", //colour of the outline
                                },
                                width: 1,
                                opacity: 0.4, // Outline opacity
                            },
                        },
                        type: "inline",
                        inline: {
                            arrangement: "equidistant",
                        },
                        move: {
                            radius: 8, // size of radius lines move in from dot
                            type: "path",
                        },
                        scale: 1,
                        url: "fox.svg",
                        position: {
                            x: 0,
                            y: 0,
                        },
                    },
                    pauseOnBlur: true,
                    pauseOnOutsideViewport: true,
                    zLayers: 100,
                    domContainer: particlesRef.current,
                },
            });
        });
    }, []);

    return (
        <div
            id="tsparticlesCustom"
            className={styles.tsparticlesCustom}
            ref={particlesRef}
        ></div>
    );
};

export default Particles;
