import React, { ReactElement } from "react";
import Text from "../../Text/Text";
import styles from "./Chip.module.css";
import { FontSize } from "../../../constants/Typography";
import { PastelColors } from "../../../constants/Colours";
import { Spacing } from "../../../constants/Spacings";

export interface ChipProps {
    chipText: string;
    colour?: PastelColors;
}

const Chip = ({ chipText, colour }: ChipProps): ReactElement => {
    const chipStyles = {
        backgroundColor: colour ? colour : PastelColors.Blue,
        padding: `${Spacing.Spacing1}px ${Spacing.Spacing2}px`,
        margin: `${Spacing.Spacing0}px ${Spacing.Spacing2}px`,
    };

    return (
        <div className={styles.chipOuter} style={chipStyles} data-testid="chip">
            <Text size={FontSize.Small}>{chipText}</Text>
        </div>
    );
};

export default Chip;
