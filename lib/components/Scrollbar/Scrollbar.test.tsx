import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Scrollbar from "./Scrollbar";
import { mockContent as children } from "./testData/testData";

describe("Scrollbar", () => {
    it("should render the component", () => {
        const { container } = render(<Scrollbar>{children}</Scrollbar>);
        const scrollContainer = screen.getByTestId("scrollContainer");
        expect(container).toMatchSnapshot();
        expect(scrollContainer).toBeInTheDocument();
    });

    it("should calculate the thumb width based on the container size", () => {
        render(<Scrollbar>{children}</Scrollbar>);
        const thumb = screen.getByTestId("scrollThumb");
        const thumbWidth = parseInt(thumb.style.width, 10);
        expect(thumbWidth).toBeGreaterThan(0);
    });

    it("should move thumb correctly while scrolling content", () => {
        render(<Scrollbar>{children}</Scrollbar>);
        const contentContainer = screen.getByTestId("contentContainer");
        const thumb = screen.getByTestId("scrollThumb");

        fireEvent.scroll(contentContainer, { target: { scrollLeft: 200 } });

        waitFor(() => {
            const thumbLeft = parseFloat(
                thumb.style.transform
                    .replace("translateX(", "")
                    .replace("%)", "")
            );
            expect(thumbLeft).toBeGreaterThan(0);
        });
    });
});
