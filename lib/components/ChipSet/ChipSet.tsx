import React, { ReactElement } from "react";
import Chip from "./Chip/Chip";
import { PastelColors } from "../../constants/Colours";
import styles from "./ChipSet.module.css";
import { Spacing } from "../../constants/Spacings";

export interface ChipSetProps {
    chipText: string[];
}

const ChipSet = ({ chipText }: ChipSetProps): ReactElement => {
    return (
        <div
            className={styles.chipSet}
            style={{ gap: Spacing.Spacing2 }}
            data-testid={"chipSet"}
        >
            {chipText.map((chip, index) => {
                const colour =
                    Object.values(PastelColors)[
                        index % Object.values(PastelColors).length
                    ];
                return <Chip key={index} chipText={chip} colour={colour} />;
            })}
        </div>
    );
};

export default ChipSet;
