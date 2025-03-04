import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { mockProducts } from "../testData/testData";

const defaultProps: ProductCardProps = {
    ...mockProducts[0],
};

describe("ProductCard", () => {
    it("should render the default component", () => {
        render(<ProductCard {...defaultProps} />);
        expect(screen.getByTestId(/productCard/)).toBeInTheDocument();
    });

    it("should handle like button click", async () => {
        render(<ProductCard {...defaultProps} />);
        const button = screen.getByTestId("icon-button");

        const icon = button.querySelector("svg");

        expect(icon).toHaveStyle("color: #f9f9f9");

        fireEvent.click(button);

        await waitFor(() => {
            expect(icon).toHaveStyle("color: #EF476F");
        });
    });

    it("should handle text button click", () => {
        const mockButtonOnClick = jest.fn();
        render(
            <ProductCard {...defaultProps} buttonOnClick={mockButtonOnClick} />
        );
        const button = screen.getByTestId(`button-${defaultProps.buttonText}`);
        fireEvent.click(button);
        expect(mockButtonOnClick).toHaveBeenCalled();
    });
});
