import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

    it("should apply left icon if type has an icon mapped to it", () => {
        render(<Input {...defaultProps} type="email" />);
        const icon = screen.getByTestId("leftIcon");
        expect(icon).toBeInTheDocument();
    });

    it("should provide an aria-label for the clear field button if label is not provided", () => {
        render(<Input {...defaultProps} clearFieldButton={true} />);
        const clearButton = screen.getByLabelText(/clear field/i);
        expect(clearButton).toHaveAttribute("aria-label", "Clear field");
    });

    it("should clear the input field when the clear button is clicked", () => {
        const mockOnChange = jest.fn();
        render(
            <Input
                {...defaultProps}
                value="test value"
                onChange={mockOnChange}
                clearFieldButton={true}
            />
        );

        const clearButton = screen.getByLabelText(/clear field/i);
        fireEvent.click(clearButton);

        expect(mockOnChange).toHaveBeenCalledWith(
            expect.objectContaining({
                target: {
                    value: "",
                },
            })
        );
    });
});
