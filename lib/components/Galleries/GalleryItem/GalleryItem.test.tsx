import React from "react";
import { render } from "@testing-library/react";
import GalleryItem, { GalleryItemProps } from "./GalleryItem";

const defaultProps: GalleryItemProps = {
    imageId: 1,
    imageUrl: "https://example.com/sunset.jpg",
    altText: "beautiful sunset",
};

describe("GalleryItem", () => {
    it("should render the component medium size by default", () => {
        const { container, getByAltText } = render(
            <GalleryItem {...defaultProps} />
        );
        const image = getByAltText(defaultProps.altText);

        expect(image).toBeInTheDocument();
        expect(image).toHaveClass("medium");
        expect(container).toMatchSnapshot();
    });

    it("should match snapshot for all variants", () => {
        const sizes = ["small", "medium", "large"] as const;
        sizes.forEach((size) => {
            const { container } = render(
                <GalleryItem {...defaultProps} size={size} />
            );
            expect(container).toMatchSnapshot();
        });
    });

    it("should have an alt attribute matching the altText prop", () => {
        const { getByAltText } = render(<GalleryItem {...defaultProps} />);
        const image = getByAltText(defaultProps.altText);

        expect(image).toHaveAttribute("alt", defaultProps.altText);
    });
});
