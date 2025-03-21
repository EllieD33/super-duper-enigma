import React from "react";
import { render, screen } from "@testing-library/react";
import TextArea, { TextAreaProps } from "./TextArea";

const defaultProps: TextAreaProps = {
    name: "my-textarea",
    value: "",
    onChange: jest.fn(),
};

describe("TextArea", () => {
    it("should render the default component", () => {
        render(<TextArea {...defaultProps} />);
        expect(screen.getByTestId("textarea")).toBeInTheDocument();
    });

    it("should render a label when provided", () => {
        render(<TextArea {...defaultProps} label="this is a label" />);
        expect(screen.getByTestId("label-this is a label")).toBeInTheDocument();
    });

    it("should render charLimit when given and showCharCount is true", () => {
        render(
            <TextArea {...defaultProps} charLimit={150} showCharCount={true} />
        );
        const charCount = screen.getByTestId("charCount");
        expect(charCount).toBeInTheDocument();
    });

    it("displays error message and applies error styles if error message is passed", () => {
        render(<TextArea {...defaultProps} error={"Test error"} />);
        const input = screen.getByTestId(/textarea/).firstChild;
        const errorMessage = screen.getByText("Test error");
        expect(input).toHaveClass("error");
        expect(errorMessage).toBeInTheDocument();
    });
});
