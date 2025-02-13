import React from "react";
import { render, screen } from "@testing-library/react";
import FilterableList, { FilterableListProps } from "./FilterableList";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { mockProducts } from "../Cards/testData/testData";

const defaultProps: FilterableListProps = {
    listItems: mockProducts,
    renderItem: (item) => <ProductCard {...item} />,
    filterSelectors: ["filter1", "filter2"],
    filterProperty: "productInfo.productTags",
};

describe("FilterableList", () => {
    it("should render the default component", () => {
        render(<FilterableList {...defaultProps} />);
        expect(screen.getByTestId("filterableList")).toBeInTheDocument();
    });
});
