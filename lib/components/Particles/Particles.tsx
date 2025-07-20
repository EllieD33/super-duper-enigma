import React, { ReactElement } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import styles from "./Particles.module.css";

export interface ParticlesProps {}

const Particles = ({}: ParticlesProps): ReactElement => {
    loadAll(tsParticles).then(() => {
        tsParticles.load({
            id: "tsparticles",
            options: {
                autoPlay: true,
                background: {
                    color: "#000",
                    image: "",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover",
                    opacity: 1,
                },
                backgroundMask: {
                    enable: false,
                    composite: "destination-out",
                    cover: {
                        color: { value: "#000000" },
                        opacity: 1,
                    },
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                detectRetina: true,
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        // onClick: {
                        //   enable: false,
                        //   mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: {
                            enable: true,
                            delay: 0.5,
                        },
                    },
                    modes: {
                        // attract: {
                        //   distance: 200,
                        //   duration: 0.4,
                        //   easing: "ease-out-quad",
                        //   factor: 1,
                        //   maxSpeed: 50,
                        //   speed: 1,
                        // },
                        bubble: {
                            distance: 40,
                            duration: 2,
                            opacity: 8,
                            size: 6,
                        },
                        // connect: {
                        //   distance: 80,
                        //   links: {
                        //     opacity: 0.5,
                        //   },
                        //   radius: 60,
                        // },
                        // grab: {
                        //   distance: 400,
                        //   links: {
                        //     opacity: 1,
                        //   },
                        // },
                        // push: {
                        //   quantity: 4,
                        // },
                        // remove: {
                        //   quantity: 2,
                        // },
                        // repulse: {
                        //   distance: 200,
                        //   duration: 0.4,
                        //   factor: 100,
                        //   speed: 1,
                        //   maxSpeed: 50,
                        //   easing: "ease-out-quad",
                        // },
                        // slow: {
                        //   factor: 1,
                        //   radius: 0,
                        // },
                        // trail: {
                        //   delay: 1,
                        //   quantity: 1,
                        //   pauseOnStop: false,
                        // },
                    },
                },
                particles: {
                    number: {
                        value: 300, // number of dots
                        density: {
                            enable: false,
                            width: 1920,
                            height: 1080,
                        },
                        limit: {
                            mode: "delete",
                            value: 0,
                        },
                    },
                    color: {
                        value: "#ffffff",
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
                        animation: {
                            enable: false, // Change way dots moev ot sure in what way
                            speed: 5,
                            startValue: "random",
                            mode: "auto",
                        },
                    },
                    links: {
                        enable: true, // lines between dots
                        distance: 30,
                        color: "#ffffff", // color of lines between dots
                        opacity: 0.4,
                        width: 1,
                        frequency: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1, // Speed lined move at
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
                                value: "#fff", //colour of the outline
                            },
                            width: 1,
                            opacity: 0.2, // Outline opacity
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
            },
        });
    });
    <div
        id="tsparticles"
        style={{ position: "fixed", inset: 0, zIndex: -1 }}
    ></div>;
    return <></>;
};

export default Particles;
