import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FilterableList, { FilterableListProps } from "./FilterableList";
import ProductCard, {
    ProductCardProps,
} from "../Cards/ProductCard/ProductCard";
import { mockProducts } from "../Cards/testData/testData";
import { getNestedProperty } from "../../utils/getNestedProperty";

const defaultProps: FilterableListProps = {
    listItems: mockProducts,
    renderItem: (item) => <ProductCard {...item} />,
    filterSelectors: ["Electronics", "Sale"],
    filterProperty: "productInfo.productTags",
};

jest.mock("../../utils/getNestedProperty.ts", () => ({
    getNestedProperty: jest.fn((obj, property) => obj[property]),
}));

jest.mock("../../utils/findItemId.ts", () => ({
    findItemId: jest.fn((obj) => obj.id),
}));

describe("FilterableList", () => {
    it("should render the default component", () => {
        render(<FilterableList {...defaultProps} />);
        expect(screen.getByTestId("filterableList")).toBeInTheDocument();
    });

    it("should render all items if no filter is selected", () => {
        render(<FilterableList {...defaultProps} />);
        const list = screen.getAllByTestId("listItem");
        expect(list.length).toBe(mockProducts.length);
    });

    it("should filter items displayed based selected filter", async () => {
        render(<FilterableList {...defaultProps} />);

        const filterButton = screen.getByTestId("button-Electronics");
        fireEvent.click(filterButton);

        const filteredProducts = mockProducts.filter((product) =>
            product.productInfo.productTags!.includes("Electronics")
        );

        filteredProducts.forEach((product) => {
            expect(
                screen.getByText(product.productInfo.productName)
            ).toBeInTheDocument();
        });

        const nonFilteredProducts = mockProducts.filter(
            (product) =>
                !product.productInfo.productTags!.includes("Electronics")
        );

        await waitFor(() => {
            nonFilteredProducts.forEach((product) => {
                expect(
                    screen.queryByText(product.productInfo.productName)
                ).not.toBeInTheDocument();
            });
        });
    });

    it("should toggle filter selection when button clicked", async () => {
        render(<FilterableList {...defaultProps} />);

        const filterButton = screen.getByTestId("button-Electronics");

        fireEvent.click(filterButton);
        await waitFor(() => {
            expect(filterButton).toHaveAttribute("aria-pressed", "true");
        });

        fireEvent.click(filterButton);
        await waitFor(() => {
            expect(filterButton).toHaveAttribute("aria-pressed", "false");
        });
    });

    it("should show all items when 'All' button clicked", async () => {
        render(<FilterableList {...defaultProps} />);

        const filterButton = screen.getByTestId("button-All");

        fireEvent.click(filterButton);
        await waitFor(() => {
            const list = screen.getAllByTestId("listItem");
            expect(list.length).toBe(mockProducts.length);
        });
    });

    it("should not show any items when no items match the selected filter", async () => {
        render(<FilterableList {...defaultProps} />);

        const filterButton = screen.getByTestId("button-Sale");
        fireEvent.click(filterButton);
        await waitFor(() => {
            const list = screen.queryAllByTestId("listItem");
            expect(list.length).toBe(0);
        });
    });

    it("should filter correctly when filterValue is an array", async () => {
        (getNestedProperty as jest.Mock).mockImplementation(
            (obj, path) => obj.productInfo.productTags
        );

        render(<FilterableList {...defaultProps} />);

        const filterButton = screen.getByTestId("button-Electronics");
        fireEvent.click(filterButton);

        await waitFor(() => {
            const filteredProducts = mockProducts.filter((product) =>
                product.productInfo.productTags!.includes("Electronics")
            );

            filteredProducts.forEach((product) => {
                expect(
                    screen.getByText(product.productInfo.productName)
                ).toBeInTheDocument();
            });

            const nonFilteredProducts = mockProducts.filter(
                (product) =>
                    !product.productInfo.productTags!.includes("Electronics")
            );

            nonFilteredProducts.forEach((product) => {
                expect(
                    screen.queryByText(product.productInfo.productName)
                ).not.toBeInTheDocument();
            });
        });
    });
});
