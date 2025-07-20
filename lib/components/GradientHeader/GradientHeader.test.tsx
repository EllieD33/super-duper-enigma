import React from "react";
import { render, screen } from "@testing-library/react";
import GradientHeader, { GradientHeaderProps } from "./GradientHeader";

const defaultProps: GradientHeaderProps = {
    children: "Experts in Web3 Security & Crisis Response",
    styleAs: "Heading1",
};

describe("GradientHeader", () => {
    it("should render the default component", () => {
        render(<GradientHeader {...defaultProps} />);
        const { container } = render(<GradientHeader {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });
});
