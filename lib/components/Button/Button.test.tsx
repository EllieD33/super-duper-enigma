import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";

const defaultProps: ButtonProps = {
    buttonText: "Click me",
    onClick: () => {},
};

describe("Button", () => {
    it("should render the default component", () => {
        render(<Button {...defaultProps} />);
        expect(screen.getByTestId("button")).toBeInTheDocument();
    });
});
