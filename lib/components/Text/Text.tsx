import React, { ReactElement } from "react";
import { TextTag } from "../../constants/TextTags";
import { Colours } from "../../constants/Colours";
import {
    FontFamily,
    FontSize,
    FontWeight,
    Typography,
} from "../../constants/Typography";
import styles from "./Text.module.css";
import { isValidTagForChildren } from "./helpers/isValidTagForChildren";

export interface TextProps {
    children: React.ReactNode;
    as?: TextTag;
    styleAs?: keyof typeof TextTag;
    colour?: Colours;
    weight?: FontWeight;
    size?: FontSize;
    font?: FontFamily;
    align?: "left" | "centre" | "right";
}

const TextTagKeys = Object.fromEntries(
    Object.entries(TextTag).map(([key, value]) => [value, key])
) as Record<TextTag, keyof typeof Typography>;

const Text = ({
    children,
    as: Tag = TextTag.Paragraph,
    styleAs,
    colour = Colours.Gray,
    align = "left",
    weight,
    size,
    font,
}: TextProps): ReactElement => {
    if (!isValidTagForChildren(Tag, children)) {
        console.warn(
            `Warning: The children provided are not valid for the <${Tag}> tag.`
        );
    }

    const typographyKey = styleAs || TextTagKeys[Tag];
    const typography = Typography[typographyKey];

    return (
        <Tag
            className={styles[align as keyof typeof styles]}
            style={{
                color: colour,
                fontWeight: weight ?? typography.fontWeight,
                fontSize: size ?? typography.fontSize,
                fontFamily: font ?? typography.fontFamily,
            }}
        >
            {children}
        </Tag>
    );
};

export default Text;
