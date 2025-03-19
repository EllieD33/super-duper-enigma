import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import NumberInput, { NumberInputProps } from "./NumberInput";

const mockOnChange = jest.fn();
const defaultProps: NumberInputProps = {
    name: "numberInput",
    value: "",
    onChange: mockOnChange,
};

describe("NumberInput", () => {
    afterEach(() => {
        mockOnChange.mockClear();
    });

    it("should render the default component", () => {
        render(<NumberInput {...defaultProps} />);
        expect(screen.getByTestId(/numberInput/)).toBeInTheDocument();
    });

    it("calls onChange when value changes", () => {
        render(<NumberInput {...defaultProps} />);

        const input = screen.getByTestId(/numberInput/);
        fireEvent.change(input, { target: { value: "10" } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it("calls onChange when increment clicked", () => {
        render(<NumberInput {...defaultProps} />);

        const incrementButton = screen.getByLabelText(/Increment/);
        fireEvent.click(incrementButton);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it("calls onChange when decrement clicked", () => {
        render(<NumberInput {...defaultProps} />);

        const decrementButton = screen.getByLabelText(/Decrement/);
        fireEvent.click(decrementButton);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it("applies success class when success prop is passed", () => {
        render(<NumberInput {...defaultProps} success />);

        const input = screen.getByTestId(/numberInput/);
        expect(input).toHaveClass("success");
    });

    it("applies disabled class when disabled prop is passed", () => {
        render(<NumberInput {...defaultProps} disabled />);

        const input = screen.getByTestId(/numberInput/);
        expect(input).toHaveClass("disabled");
        expect(input).toBeDisabled();
    });

    it("prevents typing non-numeric characters", () => {
        render(<NumberInput {...defaultProps} value="5" />);

        const input = screen.getByTestId(/numberInput/);
        fireEvent.keyDown(input, { key: "a", code: "KeyA" });
        fireEvent.keyDown(input, { key: "1", code: "Digit1" });

        expect(input).toHaveValue(5);
    });

    it("should render label when provided", () => {
        render(<NumberInput {...defaultProps} label="label" />);
        const label = screen.getByText(/label/);
        expect(label).toBeInTheDocument();
    });

    it("sets required attribute if required prop is passed", () => {
        render(<NumberInput {...defaultProps} required />);

        const input = screen.getByTestId(/numberInput/);
        expect(input).toBeRequired();
    });

    it("does not set required attribute if not passed", () => {
        render(<NumberInput {...defaultProps} />);
        const input = screen.getByTestId(/numberInput/);
        expect(input).not.toBeRequired();
    });

    it("should set aria-label to name when label is not provided", () => {
        render(<NumberInput {...defaultProps} />);
        const input = screen.getByTestId(/numberInput/);
        expect(input).toHaveAttribute("aria-label", defaultProps.name);
    });

    it("does not set aria-label when label is provided", () => {
        render(<NumberInput {...defaultProps} label={"Test Label"} />);
        const input = screen.getByTestId(/numberInput/);
        expect(input).not.toHaveAttribute("aria-label");
    });
});
