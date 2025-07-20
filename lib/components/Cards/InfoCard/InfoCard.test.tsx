import React from "react";
import { render, screen } from "@testing-library/react";
import InfoCard, { InfoCardProps } from "./InfoCard";

const defaultProps: InfoCardProps = {};

describe("InfoCard", () => {
    it("should render the default component", () => {
        render(<InfoCard {...defaultProps} />);
        expect(screen.getByTestId("InfoCardGallery")).toBeInTheDocument();
    });
});
