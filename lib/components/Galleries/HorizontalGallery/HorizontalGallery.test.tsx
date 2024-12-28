import React from "react";
import { render } from "@testing-library/react";
import HorizontalGallery, { HorizontalGalleryProps } from "./HorizontalGallery";
import mockImages from "./testData/testData";
import { GalleryItemProps } from "../GalleryItem/GalleryItem";

const defaultProps: HorizontalGalleryProps = {
    images: mockImages,
};

describe("HorizontalGallery", () => {
    it("should render the default component", () => {
        const { container } = render(<HorizontalGallery {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });

    it("should render the correct number of gallery items", () => {
        const { getAllByAltText } = render(
            <HorizontalGallery {...defaultProps} />
        );
        expect(getAllByAltText(/image/)).toHaveLength(mockImages.length);
    });

    it("should pass the correct props to GalleryItem", () => {
        const { getByAltText } = render(
            <HorizontalGallery {...defaultProps} />
        );
        mockImages.forEach((image: GalleryItemProps) => {
            const imgElement = getByAltText(image.altText);
            expect(imgElement).toHaveAttribute("src", image.imageUrl);
        });
    });

    it("should apply the correct container class", () => {
        const { container } = render(<HorizontalGallery {...defaultProps} />);
        expect(container.firstChild).toHaveClass("container");
    });
});
