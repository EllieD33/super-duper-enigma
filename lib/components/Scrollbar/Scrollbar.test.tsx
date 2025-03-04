import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Scrollbar from "./Scrollbar";
import { mockContent as children } from "./testData/testData";

beforeEach(() => {
    jest.clearAllMocks();
});

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

    it("should handle ResizeObserver callback", async () => {
        render(<Scrollbar>{children}</Scrollbar>);
        const thumb = screen.getByTestId("scrollThumb");

        const resizeObserverInstance = new ResizeObserver(() => {});

        resizeObserverInstance.triggerResize();

        await waitFor(() => {
            expect(thumb).toHaveStyle("width: 20%");
        });
    });

    it("should scroll content when clicking on the track", () => {
        const scrollToMock = jest.fn();

        render(<Scrollbar>{children}</Scrollbar>);

        const contentContainer = screen.getByTestId("contentContainer");

        contentContainer.scrollTo = scrollToMock;

        const track = screen.getByTestId("scrollTrack");
        fireEvent.click(track, { clientX: 150 });

        expect(scrollToMock).toHaveBeenCalled();
    });

    it("should update scroll position when dragging the thumb", () => {
        render(<Scrollbar>{children}</Scrollbar>);
        const thumb = screen.getByTestId("scrollThumb");
        const contentContainer = screen.getByTestId("contentContainer");

        const initialScrollLeft = 0;
        const mockClientX = 100;
        const scrollWidth = 2000;
        const clientWidth = 500;
        contentContainer.scrollLeft = initialScrollLeft;

        fireEvent.mouseDown(thumb, { clientX: mockClientX });

        fireEvent.mouseMove(document, { clientX: 200 });

        const trackWidth = 300;
        const scrollRatio = scrollWidth / clientWidth;
        const expectedScrollLeft =
            initialScrollLeft + (100 * scrollRatio) / trackWidth;

        waitFor(() => {
            expect(contentContainer.scrollLeft).toBeCloseTo(expectedScrollLeft);
        });
    });

    it("should add mousemove and mouseup event listeners when dragging starts", () => {
        const addEventListenerSpy = jest.spyOn(document, "addEventListener");
        render(<Scrollbar>{children}</Scrollbar>);

        fireEvent.mouseDown(screen.getByTestId("scrollThumb"));

        expect(addEventListenerSpy).toHaveBeenCalledWith(
            "mousemove",
            expect.any(Function)
        );
        expect(addEventListenerSpy).toHaveBeenCalledWith(
            "mouseup",
            expect.any(Function)
        );

        addEventListenerSpy.mockRestore();
    });

    it("should set isDragging to false on mouse up", () => {
        const { getByTestId } = render(<Scrollbar>Test Content</Scrollbar>);

        const thumb = getByTestId("scrollThumb");

        fireEvent.mouseDown(thumb, { clientX: 100 });

        fireEvent.mouseUp(document);

        expect(document.onmouseup).toBeNull();
    });

    it("should update thumb width when content overflows", () => {
        render(<Scrollbar>Test Content</Scrollbar>);

        const contentRef = screen.getByTestId("contentContainer");
        const trackRef = screen.getByTestId("scrollTrack");
        const thumbRef = screen.getByTestId("scrollThumb");

        Object.defineProperty(contentRef, "scrollWidth", { value: 2000 });
        Object.defineProperty(contentRef, "clientWidth", { value: 500 });
        Object.defineProperty(trackRef, "clientWidth", { value: 100 });

        window.dispatchEvent(new Event("resize"));

        expect(thumbRef.style.width).toBe("25px");
    });
});
