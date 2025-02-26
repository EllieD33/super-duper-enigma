import React, { ReactElement } from "react";
import styles from "./Marquee.module.css";
import Text from "../Text/Text";
import { TextTag } from "../../constants/TextTags";
import clsx from "clsx";

export interface MarqueeProps {
    items: any[];
    reverse?: boolean;
}

const Marquee = ({ items, reverse }: MarqueeProps): ReactElement => {
    const trackStyles = clsx(
        styles.track,
        reverse ? styles.reverse : styles.forward
    );
    return (
        <section className={styles.marqueeContainer}>
            <div data-testid="track" className={trackStyles}>
                {[...items, ...items].map((item, index) => (
                    <span
                        key={index}
                        className={`${styles.marqueeItem} ${styles.noWrap}`}
                    >
                        <Text as={TextTag.Span} styleAs={"Heading3"}>
                            {item}
                        </Text>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
