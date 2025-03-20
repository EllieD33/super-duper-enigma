import React from "react";
import { render, screen } from "@testing-library/react";
import Accordion, { AccordionProps } from "./Accordion";

const defaultProps: AccordionProps = {
    content: [
        { heading: "Heading One", body: "test text one" },
        { heading: "Heading Two", body: "test text two" },
        { heading: "Heading Three", body: "test text three" },
    ],
};

describe("Accordion", () => {
    it("should render the default component", () => {
        render(<Accordion {...defaultProps} />);
        expect(screen.getByTestId("accordion")).toBeInTheDocument();
    });
});
