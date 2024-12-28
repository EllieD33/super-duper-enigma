import type { Meta, StoryObj } from "@storybook/react";
import GalleryItem, { GalleryItemProps } from "./GalleryItem";

const meta = {
    title: "Library/Galleries/GalleryItem",
    component: GalleryItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof GalleryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
    imageId: 1,
    imageUrl:
        "https://cdn.pixabay.com/photo/2023/08/08/15/01/flower-8177578_640.jpg",
    altText: "white flowers wth dark green leaves behind them",
};

export const Default: Story = {
    args: {
        ...defaultProps,
    } as GalleryItemProps,
};

export const Small: Story = {
    args: {
        ...defaultProps,
        size: "small",
    } as GalleryItemProps,
};

export const Medium: Story = {
    args: {
        ...defaultProps,
        size: "medium",
    } as GalleryItemProps,
};

export const Large: Story = {
    args: {
        ...defaultProps,
        size: "large",
    } as GalleryItemProps,
};

export const WithTextOverlay: Story = {
    args: {
        ...defaultProps,
        overlayText: "Hello",
    } as GalleryItemProps,
};

export const Fallback: Story = {
    args: {
        imageId: 1,
        imageUrl: "",
        altText: "",
    } as GalleryItemProps,
};
