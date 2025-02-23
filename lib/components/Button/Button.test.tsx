import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./Button";
import { FaHeart } from "react-icons/fa";

const defaultProps: ButtonProps = {
    buttonText: "Click me",
    onClick: jest.fn(),
};

const iconProps: ButtonProps = {
    onClick: jest.fn(),
    variant: "icon",
    icon: <FaHeart />,
};

describe("Button Component", () => {
    it("should render the button with text", () => {
        render(<Button {...defaultProps} />);
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Click me");
    });

    it("should render the icon button when variant is 'icon'", () => {
        render(<Button {...iconProps} />);
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("should render a text button with icon if both text and icon are passed", () => {
        render(<Button {...defaultProps} icon={<FaHeart />} />);
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Click me");
        expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("should apply the correct size styles", () => {
        render(<Button {...defaultProps} size="large" />);
        const button = screen.getByTestId("button");
        expect(button).toHaveStyle("font-size: 1.25rem");
    });

    it("should apply the correct variant class", () => {
        render(<Button {...defaultProps} variant="secondary" />);
        const button = screen.getByTestId("button");
        expect(button).toHaveClass("secondary");
    });

    it("should call onClick when the button is clicked", () => {
        render(<Button {...defaultProps} />);
        const button = screen.getByTestId("button");
        fireEvent.click(button);
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it("should display a loading state when loading prop is true", () => {
        render(<Button {...defaultProps} loading />);
        const button = screen.getByTestId("button");
        expect(button).toBeDisabled();
    });

    it("should apply the correct disabled styles", () => {
        render(<Button {...defaultProps} disabled />);
        const button = screen.getByTestId("button");
        expect(button).toBeDisabled();
        expect(button).toHaveClass("disabled");
    });

    it("should render icon correctly when variant is 'icon' and icon prop is provided", () => {
        render(<Button {...iconProps} />);
        const button = screen.getByTestId("button");
        expect(button).toContainHTML("<svg");
    });
});
