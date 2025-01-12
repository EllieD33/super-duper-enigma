import React, { ReactElement } from "react";
import { TextTag } from "../../constants/TextTags";
import { Colours } from "../../constants/Colours";
import { FontFamily, FontSize, FontWeight } from "../../constants/Typography";
import styles from "./Text.module.css";

export interface TextProps {
    children: React.ReactNode;
    as?: TextTag;
    colour?: Colours;
    weight?: FontWeight;
    size?: FontSize;
    font?: FontFamily;
    align?: "left" | "centre" | "right";
}

const Text = ({
    children,
    as: Tag = TextTag.Paragraph,
    colour = Colours.Gray,
    weight = FontWeight.Regular,
    size = FontSize.Medium,
    font = FontFamily.Body,
    align = "left",
}: TextProps): ReactElement => {
    const inlineStyles = {
        color: colour,
        fontWeight: Tag.startsWith("h") ? FontWeight.Bold : weight,
        fontSize: Tag.startsWith("h")
            ? FontSize[`${Tag}` as keyof typeof FontSize]
            : size,
        fontFamily: Tag.startsWith("h") ? FontFamily.Heading : font,
    };

    return (
        <Tag className={styles[align as keyof TextProps]} style={inlineStyles}>
            {children}
        </Tag>
    );
};

export default Text;
