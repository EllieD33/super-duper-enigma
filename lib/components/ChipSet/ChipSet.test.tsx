import React from "react";
import { render, screen } from "@testing-library/react";
import ChipSet, { ChipSetProps } from "./ChipSet";

const defaultProps: ChipSetProps = {
    chipText: [
        "Category",
        "Tag",
        "Longer label",
        "String",
        "Hi",
        "Test text",
        "More text",
        "Label",
        "Hello",
    ],
};

describe("ChipSet", () => {
    it("should render the default component", () => {
        render(<ChipSet {...defaultProps} />);
        expect(screen.getByTestId("chipSet")).toBeInTheDocument();
    });

    it("should render the correct number of chips", () => {
        render(<ChipSet {...defaultProps} />);
        expect(screen.getAllByTestId("chip").length).toBe(
            defaultProps.chipText.length
        );
    });
});
