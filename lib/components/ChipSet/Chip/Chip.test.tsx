import React from "react";
import { render, screen } from "@testing-library/react";
import Chip, { ChipProps } from "./Chip";
import { PastelColors } from "../../../constants/Colours";

const defaultProps: ChipProps = {
    chipText: "Category",
};

describe("Chip", () => {
    it("should render the default component", () => {
        render(<Chip {...defaultProps} />);
        expect(screen.getByText("Category")).toBeInTheDocument();
    });

    it("should set colour according to prop passed", () => {
        render(<Chip {...defaultProps} colour={PastelColors.Green} />);
        expect(screen.getByTestId("chip")).toHaveStyle(
            `background-color: ${PastelColors.Green}`
        );
    });

    it("should not render a chip if passed an empty string", () => {
        const { container } = render(<Chip chipText="" />);
        expect(container.firstChild).toBeNull();
    });
});
