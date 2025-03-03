import React from "react";
import { render, screen } from "@testing-library/react";
import Input, { TextInputProps } from "./TextInput";

const defaultProps: TextInputProps = {
    name: "my-input",
    value: "",
    onChange: jest.fn(),
};

describe("Input", () => {
    it("should render the default component", () => {
        render(<Input {...defaultProps} />);
        expect(
            screen.getByTestId(`${defaultProps.name}-input`)
        ).toBeInTheDocument();
    });
});
