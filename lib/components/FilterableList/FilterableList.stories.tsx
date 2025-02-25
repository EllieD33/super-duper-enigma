import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilterableList, { FilterableListProps } from "./FilterableList";
import { mockProducts } from "../Cards/testData/testData";
import ProductCard from "../Cards/ProductCard/ProductCard";

const meta = {
    title: "Library/FilterableList/FilterableList",
    component: FilterableList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof FilterableList>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: FilterableListProps = {
    listItems: mockProducts,
    renderItem: (item) => <ProductCard {...item} />,
    filterSelectors: ["Sale", "Electronics", "Fashion", "Gadgets", "Trending"],
    filterProperty: "productInfo.productTags",
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
