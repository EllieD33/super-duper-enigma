import React, { ReactElement } from "react";
import styles from "./InfoCard.module.css";
import { FaHandHoldingHeart, FaThinkPeaks, FaShieldAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Text from "../../Text/Text";
import { Colours } from "../../../constants/Colours";
import clsx from "clsx";

export interface InfoCardProps {}

const InfoCard = ({}: InfoCardProps): ReactElement => {
    return (
        <section className={styles.container} data-testid="InfoCardGallery">
            <article className={clsx(styles.card, styles.gradient)}>
                <div className={styles.iconRow}>
                    <div className={styles.iconContainer}>
                        <FaHandHoldingHeart size={48} color={Colours.White} />
                    </div>
                    <FaArrowRight
                        size={36}
                        color={Colours.White}
                        className={styles.arrow}
                    />
                </div>
                <Text colour={Colours.White} styleAs="Heading2">
                    Scammed or hacked? You're not alone.
                </Text>
                <Text colour={Colours.White}>
                    We help individuals trace fraud, recover assets, and get
                    justice.
                </Text>
            </article>

            <article className={clsx(styles.cardTwoWrapper, styles.card)}>
                <div className={clsx(styles.inner)}>
                    <div className={styles.iconRow}>
                        <div className={styles.iconContainer}>
                            <FaThinkPeaks size={48} color={Colours.White} />
                        </div>
                        <FaArrowRight
                            size={36}
                            color={Colours.White}
                            className={styles.arrow}
                        />
                    </div>
                    <Text colour={Colours.White} styleAs="Heading2">
                        Fraud just disrupted your business?
                    </Text>
                    <Text colour={Colours.White}>
                        Rapid response, strategic recovery, and support to
                        recover losses.
                    </Text>
                </div>
            </article>

            <article className={clsx(styles.gradientBorder)}>
                <div className={styles.card}>
                    <div className={styles.iconRow}>
                        <div className={styles.iconContainer}>
                            <FaShieldAlt size={48} color={Colours.White} />
                        </div>
                        <FaArrowRight
                            size={36}
                            color={Colours.White}
                            className={styles.arrow}
                        />
                    </div>
                    <Text colour={Colours.White} styleAs="Heading2">
                        Build security resilience proactively
                    </Text>
                    <Text colour={Colours.White}>
                        Get ahead with proactive fraud prevention tailored to
                        your risk profile.
                    </Text>
                </div>
            </article>
        </section>
    );
};

export default InfoCard;
