import React, { ReactElement } from "react";
import styles from "./Accordion.module.css";
import Text from "../Text/Text";
import { TextTag } from "../../constants/TextTags";
import { Typography } from "../../constants/Typography";
import { Colours } from "../../constants/Colours";

type AccordionSection = { heading: string; body: string };

export interface AccordionProps {
    content: AccordionSection[];
}

const Accordion = ({ content }: AccordionProps): ReactElement => {
    return (
        <div className={styles.accordion} data-testid={"accordion"}>
            {content.map((section) => (
                <details key={section.heading}>
                    <summary
                        style={{
                            ...Typography.Heading3,
                            color: Colours.DarkBlue,
                        }}
                    >
                        {section.heading}
                    </summary>
                    <div>
                        <Text as={TextTag.Paragraph} className={styles.content}>
                            {section.body}
                        </Text>
                    </div>
                </details>
            ))}
        </div>
    );
};

export default Accordion;
