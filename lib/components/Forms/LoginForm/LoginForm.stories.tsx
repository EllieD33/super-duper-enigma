import type { Meta, StoryObj } from "@storybook/react";
import LoginForm, { LoginFormProps } from "./LoginForm";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "Library/Forms/LoginForm/LoginForm",
    component: LoginForm,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
