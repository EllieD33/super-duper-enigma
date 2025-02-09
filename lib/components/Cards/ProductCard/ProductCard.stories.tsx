import type { Meta, StoryObj } from "@storybook/react";
import ProductCard, { ProductCardProps } from "./ProductCard";
import { mockProducts } from "../testData/testData";

const meta = {
    title: "Library/Cards/ProductCard",
    component: ProductCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// const defaultProps = {};

export const Default: Story = {
    args: {
        ...mockProducts[0],
    },
};
