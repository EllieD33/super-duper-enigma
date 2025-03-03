import React from "react";
import { render, screen } from "@testing-library/react";
import Input, { TextInputProps } from "./TextInput";

const defaultProps: TextInputProps = {
    name: "my-input",
    placeholder: "Enter your name",
    value: "",
    onChange: jest.fn(),
};

describe("Input", () => {
    it("should render the default component", () => {
        render(<Input {...defaultProps} />);
        const input = screen.getByTestId(`${defaultProps.name}-input`);
        expect(input).toBeInTheDocument();
    });

    it("should render placeholder text when provided", () => {
        render(<Input {...defaultProps} />);
        const placeholder = screen.getByPlaceholderText("Enter your name");
        expect(placeholder).toBeInTheDocument();
    });

    it("should render a top label when passed", () => {
        render(
            <Input
                {...defaultProps}
                label={{ labelText: "Input label", labelPosition: "top" }}
            />
        );
        const label = screen.getByTestId(`${defaultProps.name}-inputLabel`);
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass("topLabel");
    });

    it("should render a floating label when passed", () => {
        render(
            <Input
                {...defaultProps}
                label={{ labelText: "Input label", labelPosition: "floating" }}
            />
        );
        const label = screen.getByTestId(`${defaultProps.name}-inputLabel`);
        const input = screen.getByTestId(`${defaultProps.name}-input`);
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass("floatingLabel");
        expect(input).toHaveClass("inputFloatingLabel");
    });

    it("should not render a placeholder if label is provided", () => {
        render(
            <Input
                {...defaultProps}
                label={{ labelText: "Input label", labelPosition: "floating" }}
            />
        );
        expect(
            screen.queryByPlaceholderText(defaultProps.placeholder!)
        ).toBeNull();
    });

    it("should provide an aria-label if label is not provided", () => {
        render(<Input {...defaultProps} />);
        const input = screen.getByTestId(`${defaultProps.name}-input`);
        expect(input).toHaveAttribute("aria-label", defaultProps.name);
    });
});
