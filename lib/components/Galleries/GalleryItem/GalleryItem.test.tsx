import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import GalleryItem, { GalleryItemProps } from "./GalleryItem";

const defaultProps: GalleryItemProps = {
    imageId: 1,
    imageUrl: "https://example.com/sunset.jpg",
    altText: "beautiful sunset",
};

describe("GalleryItem", () => {
    it("should display a skeleton while the image is loading", () => {
        render(<GalleryItem {...defaultProps} />);
        expect(screen.getByTestId("skeleton")).toBeInTheDocument();
    });

    it("should remove the skeleton after the image loads", async () => {
        const props = { ...defaultProps };
        render(<GalleryItem {...props} />);

        const image = screen.getByTestId("galleryItemImage");
        fireEvent.load(image);

        await waitFor(() => {
            expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument();
        });
    });

    it("should render the fallbackImage if no imageURL is passed", async () => {
        const faultyProps = {
            ...defaultProps,
            imageUrl: "",
            altText: "placeholder image",
        };
        render(<GalleryItem {...faultyProps} />);
        const image = screen.getByTestId("galleryItemImage");
        fireEvent.error(image);

        await waitFor(() => {
            expect(image).toHaveAttribute("src", "https://placehold.co/600");
            expect(image).toHaveAttribute("alt", "image not found");
        });
    });

    it("should render the default component", () => {
        const { container } = render(<GalleryItem {...defaultProps} />);
        const image = screen.getByTestId("galleryItemImage");

        expect(image).toBeInTheDocument();
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
        render(<GalleryItem {...defaultProps} />);
        const image = screen.getByTestId("galleryItemImage");

        expect(image).toHaveAttribute("alt", defaultProps.altText);
    });

    it("should render the overlay with text when overlayText is provided", () => {
        const overlayText = "Overlay Text";

        render(<GalleryItem {...defaultProps} overlayText={overlayText} />);

        const overlayElement = screen.getByText(overlayText);
        expect(overlayElement).toBeInTheDocument();
        expect(overlayElement).toHaveClass("overlayContent");
    });

    it("should not render the overlay when overlayText is not provided", () => {
        render(<GalleryItem {...defaultProps} />);

        const overlayElement = screen.queryByText(/overlayContent/i);
        expect(overlayElement).toBeNull();
    });
});
