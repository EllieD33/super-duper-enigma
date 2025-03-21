import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Accordion, { AccordionProps } from "./Accordion";

const defaultProps: AccordionProps = {
    content: [
        { heading: "Heading One", body: "test text one" },
        { heading: "Heading Two", body: "test text two" },
        { heading: "Heading Three", body: "test text three" },
    ],
};

describe("Accordion", () => {
    it("should render the component", () => {
        render(<Accordion {...defaultProps} />);

        expect(screen.getByTestId("accordion")).toBeInTheDocument();
        expect(screen.getByText("Heading One")).toBeInTheDocument();
        expect(screen.getByText("Heading Two")).toBeInTheDocument();
        expect(screen.getByText("Heading Three")).toBeInTheDocument();
    });

    it("toggles sections", () => {
        render(<Accordion {...defaultProps} />);

        const section1 = screen.getByText("Heading One");

        const content1 = screen.queryByText("test text one");
        expect(content1).toBeInTheDocument();
        expect(content1).not.toBeVisible();

        fireEvent.click(section1);
        expect(content1).toBeVisible();

        fireEvent.click(section1);
        expect(content1).not.toBeVisible();
    });

    it("should toggle multiple sections independently", () => {
        render(<Accordion {...defaultProps} />);

        const section1 = screen.getByText("Heading One");
        const section2 = screen.getByText("Heading Two");

        fireEvent.click(section1);
        expect(screen.getByText("test text one")).toBeVisible();

        const content2 = screen.queryByText("test text two");
        expect(content2).toBeInTheDocument();
        expect(content2).not.toBeVisible();

        fireEvent.click(section2);
        expect(screen.getByText("test text two")).toBeVisible();

        expect(screen.getByText("test text one")).toBeVisible();
    });

    it("should have the same name attribute on all <details> elements when allowMultipleOpen is false", () => {
        render(<Accordion {...defaultProps} allowMultipleOpen={false} />);

        const detailsElements = screen
            .getAllByRole("group")
            .map((section) => section.closest("details"));

        const nameAttribute = detailsElements[0]?.getAttribute("name");
        detailsElements.forEach((detail) => {
            expect(detail).toHaveAttribute("name", nameAttribute);
        });
    });
});
