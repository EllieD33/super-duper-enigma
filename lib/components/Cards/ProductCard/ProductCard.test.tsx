import React from "react";
import { render, screen } from "@testing-library/react";
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
});
