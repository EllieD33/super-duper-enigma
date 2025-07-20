import React, { ReactElement } from "react";
import styles from "./GradientHeader.module.css";
import Text, { TextProps } from "../Text/Text";

export interface GradientHeaderProps extends TextProps {
    variant?: "pinkToBlue" | "pink" | "blue";
}

const GradientHeader = ({
    variant = "pinkToBlue",
    children,
    ...props
}: GradientHeaderProps): ReactElement => {
    return (
        <Text className={styles[variant]} {...props}>
            {children}
        </Text>
    );
};

export default GradientHeader;
