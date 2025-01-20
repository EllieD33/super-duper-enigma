import React from "react";
import { render, screen } from "@testing-library/react";
import Text, { TextProps } from "./Text";
import { TextTag } from "../../constants/TextTags";
import { Colours } from "../../constants/Colours";
import { FontFamily, FontSize, FontWeight } from "../../constants/Typography";

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

const bodyTags = [
    TextTag.Paragraph,
    TextTag.Span,
    TextTag.Div,
    TextTag.Small,
    TextTag.Strong,
    TextTag.Emphasis,
    TextTag.Label,
];

describe("Text", () => {
    it("should render the default component", () => {
        const { container } = render(<Text>{defaultProps.children}</Text>);
        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    headingTags.forEach((heading) => {
        it(`should apply default Heading font and weight to ${heading} tag`, () => {
            const { container } = render(
                <Text as={heading}>{defaultProps.children}</Text>
            );
            expect(container.firstChild).toHaveStyle(
                "font-family: 'Roboto', sans-serif"
            );
            expect(container.firstChild).toHaveStyle("font-weight: 700");
        });
    });

    bodyTags.forEach((tag) => {
        it(`should apply default Body font family to ${tag} tag`, () => {
            const { container } = render(
                <Text as={tag}>{defaultProps.children}</Text>
            );
            expect(container.firstChild).toHaveStyle(
                "font-family: 'Open Sans', sans-serif"
            );
        });
    });

    it("should render Text with custom colour prop", () => {
        render(<Text colour={Colours.DarkBlue}>{defaultProps.children}</Text>);

        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toHaveStyle(`color: ${Colours.DarkBlue}`);
    });

    it("should render Text with custom align prop", () => {
        render(<Text align="right">{defaultProps.children}</Text>);

        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toHaveClass("right");
    });

    it("should render Text with custom weight prop", () => {
        render(
            <Text weight={FontWeight.ExtraBold}>{defaultProps.children}</Text>
        );

        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toHaveStyle(`font-weight: ${FontWeight.ExtraBold}`);
    });

    it("should render Text with custom size prop", () => {
        render(<Text size={FontSize.Large}>{defaultProps.children}</Text>);

        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toHaveStyle(`font-size: ${FontSize.Large}`);
    });

    it("should render Text with custom font prop", () => {
        render(<Text font={FontFamily.System}>{defaultProps.children}</Text>);

        const textElement = screen.getByText(/I am some test text/);
        expect(textElement).toHaveStyle(`font-family: ${FontFamily.System}`);
    });

    it("should render without errors if nested children passed", () => {});

    //not allow nested h tags
    //no p, div or lists with p tags
});
