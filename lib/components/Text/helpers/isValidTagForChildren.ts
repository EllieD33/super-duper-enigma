import React, { ReactNode } from "react";
import { TextTag } from "../../../constants/TextTags";

const acceptableInlineTags = [
    "a",
    "span",
    "strong",
    "em",
    "code",
    "abbr",
    "small",
    "i",
    "b",
    "img",
    "svg",
];

export const isValidTagForChildren = (
    tag: TextTag,
    children: ReactNode
): boolean => {
    if (tag.startsWith("h") || tag === "p") {
        const checkChildren = (child: ReactNode): boolean => {
            if (React.isValidElement(child)) {
                const childType = child.type;

                if (typeof childType === "string") {
                    if (!acceptableInlineTags.includes(childType)) {
                        return false;
                    }
                } else {
                    return false;
                }

                if (child.props && child.props.children) {
                    const childChildren = React.Children.toArray(
                        child.props.children
                    );
                    for (let nestedChild of childChildren) {
                        if (!checkChildren(nestedChild)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };

        const childArr = React.Children.toArray(children);
        for (let child of childArr) {
            if (!checkChildren(child)) {
                return false;
            }
        }
    }
    return true;
};
