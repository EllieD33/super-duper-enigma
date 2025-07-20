import React, { ReactElement } from "react";
import styles from "./Hero.module.css";
import Text from "../Text/Text";
import GradientHeader from "../GradientHeader/GradientHeader";
import { Colours } from "../../constants/Colours";
import { FontSize, FontWeight } from "../../constants/Typography";
import { TextTag } from "../../constants/TextTags";
import Particles from "../Particles/Particles";
import InfoCard from "../Cards/InfoCard/InfoCard";

export interface HeroProps {}

const Hero = ({}: HeroProps): ReactElement => {
    return (
        <section className={styles.heroGrid}>
            <div className={styles.heroTopRow}>
                <div className={styles.textContainer}>
                    <Text
                        size={FontSize.XXL}
                        weight={FontWeight.ExtraBold}
                        colour={Colours.White}
                    >
                        Experts in Web3{" "}
                        <GradientHeader
                            as={TextTag.Span}
                            size={FontSize.XXL}
                            weight={FontWeight.ExtraBold}
                        >
                            Security & Crisis Response
                        </GradientHeader>
                        .
                    </Text>
                    <Text
                        styleAs="Heading2"
                        weight={FontWeight.Medium}
                        colour={Colours.White}
                    >
                        We're here when you need us.
                    </Text>
                    <Text styleAs="Heading2" colour={Colours.White}>
                        Safer together.
                    </Text>
                </div>
                <div className={styles.particlesContainer}>
                    <Particles />
                </div>
            </div>
            <InfoCard />
        </section>
    );
};

export default Hero;
