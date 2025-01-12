import React from "react";
import { render, screen } from "@testing-library/react";
import Text, { TextProps } from "./Text";
import { TextTag } from "../../constants/TextTags";

const defaultProps: TextProps = {
    children: "I am some test text",
};

const headingTags = [
    TextTag.Heading1,
    TextTag.Heading2,
    TextTag.Heading3,
    TextTag.Heading4,
    TextTag.Heading5,
    TextTag.Heading6,
];

describe("Text", () => {
    it("should render the default component", () => {
        const { container } = render(<Text>{defaultProps.children}</Text>);
        expect(container.firstChild).toMatchSnapshot();
    });

    headingTags.forEach((heading) => {
        it(`"should apply Heading font family to ${heading} tag`, () => {
            const { container } = render(
                <Text as={heading}>{defaultProps.children}</Text>
            );
            expect(container.firstChild).toHaveStyle(
                "font-family: 'Roboto', sans-serif"
            );
        });
    });
});
