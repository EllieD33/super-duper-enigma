import React from "react";
import { render, screen } from "@testing-library/react";
import Marquee, { MarqueeProps } from "./Marquee";

const defaultProps: MarqueeProps = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
};

describe("Marquee", () => {
    const { items } = defaultProps;

    it("should render marquee items", () => {
        render(<Marquee {...defaultProps} />);
        const renderedItems = screen.getAllByText(/Item/);
        expect(renderedItems).toHaveLength(items.length * 2);
    });

    it("renders items with correct text", () => {
        render(<Marquee {...defaultProps} />);

        items.forEach((item) => {
            const matchingItems = screen.getAllByText(item);
            expect(matchingItems).toHaveLength(2);
        });
    });

    it("applies the reverse class when reverse prop is passed", () => {
        render(<Marquee {...defaultProps} reverse />);

        const track = screen.getByTestId("track");
        expect(track).toHaveClass(/reverse/);
    });

    it("applies the forward class when reverse prop is not passed", () => {
        render(<Marquee {...defaultProps} />);

        const track = screen.getByTestId("track");
        expect(track).toHaveClass(/forward/);
    });

    it("handles dynamically updated arrays", () => {
        const { rerender } = render(<Marquee {...defaultProps} />);

        const initialItems = screen.getAllByText(/Item/);
        expect(initialItems).toHaveLength(items.length * 2);

        const updatedItems = [
            "Updated Item 1",
            "Updated Item 2",
            "Updated Item 3",
        ];
        rerender(<Marquee items={updatedItems} />);

        const dynamicItems = screen.getAllByText(/Updated Item/);
        expect(dynamicItems).toHaveLength(updatedItems.length * 2);
    });
});
