import React from "react";
import { render, screen } from "@testing-library/react";
import MasonryGallery, { MasonryGalleryProps } from "./MasonryGallery";
import { GalleryItemProps } from "../GalleryItem/GalleryItem";
import mockImages from "./testData/testData";

const defaultProps: MasonryGalleryProps = {
    images: mockImages,
};

describe("MasonryGallery", () => {
    it("should render the default component", () => {
        const { container } = render(<MasonryGallery {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });

    it("should render the correct number of gallery items", () => {
        render(<MasonryGallery {...defaultProps} />);
        const images = screen.getAllByTestId("galleryItemImage");
        expect(images).toHaveLength(mockImages.length);
    });

    it("should pass the correct props to GalleryItem", () => {
        render(<MasonryGallery {...defaultProps} />);
        mockImages.forEach((image: GalleryItemProps) => {
            const imgElement = screen.getByAltText(image.altText);
            expect(imgElement).toHaveAttribute("src", image.imageUrl);
        });
    });

    it("should apply the correct container class", () => {
        const { container } = render(<MasonryGallery {...defaultProps} />);
        expect(container.firstChild).toHaveClass("container");
    });

    it("should render nothing when images array is empty", () => {
        render(<MasonryGallery images={[]} />);
        const container = screen.queryByTestId("masonry-gallery-container");
        expect(container).not.toBeInTheDocument();
    });
});
