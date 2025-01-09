import React, {
    ReactElement,
    useRef,
    useState,
    useCallback,
    useEffect,
} from "react";
import styles from "./Scrollbar.module.css";

export interface ScrollbarProps {
    children: React.ReactNode;
}

const Scrollbar = ({ children }: ScrollbarProps): ReactElement => {
    const contentRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbWidthRef = useRef<number>(20);
    const startClientXRef = useRef<number>(0);
    const startScrollLeftRef = useRef<number>(0);
    const [isScrollbarVisible, setIsScrollbarVisible] =
        useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleThumbPosition = useCallback(() => {
        if (!contentRef.current || !thumbRef.current || !trackRef.current)
            return;

        const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;

        const trackWidth = trackRef.current.clientWidth;
        const thumbWidth = (clientWidth / scrollWidth) * trackWidth;

        thumbWidthRef.current = Math.max(thumbWidth, 20);
        thumbRef.current.style.width = `${thumbWidthRef.current}px`;
        const maxThumbLeft = trackWidth - thumbWidthRef.current;

        const thumbLeft =
            (scrollLeft / (scrollWidth - clientWidth)) * maxThumbLeft;

        thumbRef.current.style.transform = `translateX(${thumbLeft}px)`;
    }, []);

    const handleResize = useCallback(() => {
        if (!contentRef.current || !thumbRef.current || !trackRef.current)
            return;

        const { clientWidth, scrollWidth } = contentRef.current;
        const trackWidth = trackRef.current.clientWidth;

        const hasOverflow = scrollWidth > clientWidth;
        setIsScrollbarVisible(hasOverflow);

        if (hasOverflow) {
            const thumbWidth = Math.max(
                (clientWidth / scrollWidth) * trackWidth,
                20
            );
            thumbWidthRef.current = thumbWidth;
            thumbRef.current.style.width = `${thumbWidth}px`;
            handleThumbPosition();
        }
    }, [handleThumbPosition]);

    const handleTrackClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            if (!contentRef.current || !trackRef.current) return;

            const { left: trackLeft } =
                trackRef.current.getBoundingClientRect();
            const clickPosition = e.clientX - trackLeft;
            const { scrollWidth, clientWidth } = contentRef.current;
            const clickRatio = clickPosition / trackRef.current.clientWidth;

            contentRef.current.scrollTo({
                left: clickRatio * (scrollWidth - clientWidth),
                behavior: "smooth",
            });
        },
        []
    );

    const handleThumbMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragging(true);
            startClientXRef.current = e.clientX;

            if (contentRef.current) {
                startScrollLeftRef.current = contentRef.current.scrollLeft;
            }
        },
        []
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging || !contentRef.current || !trackRef.current) return;

            const deltaX = e.clientX - startClientXRef.current;
            const { scrollWidth, clientWidth } = contentRef.current;
            const trackWidth = trackRef.current.clientWidth;
            const scrollRatio = scrollWidth / clientWidth;

            const newScrollLeft =
                startScrollLeftRef.current +
                (deltaX * scrollRatio) / trackWidth;
            contentRef.current.scrollLeft = newScrollLeft;
        },
        [isDragging]
    );

    const handleMouseUp = useCallback(() => {
        if (isDragging) setIsDragging(false);
    }, [isDragging]);

    useEffect(() => {
        const contentElement = contentRef.current;
        const trackElement = trackRef.current;

        if (!contentElement || !trackElement) return;

        let resizeFrame: number;

        const onResize = () => {
            if (resizeFrame) cancelAnimationFrame(resizeFrame);
            resizeFrame = requestAnimationFrame(() => handleResize());
        };

        const resizeObserver = new ResizeObserver(onResize);

        resizeObserver.observe(contentElement);
        resizeObserver.observe(trackElement);

        requestAnimationFrame(() => {
            handleResize();
        });

        return () => {
            resizeObserver.disconnect();
            if (resizeFrame) cancelAnimationFrame(resizeFrame);
        };
    }, [handleResize]);

    useEffect(() => {
        const onWindowResize = () => handleResize();
        window.addEventListener("resize", onWindowResize);

        return () => {
            window.removeEventListener("resize", onWindowResize);
        };
    }, [handleResize]);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        const contentElement = contentRef.current;

        if (contentElement) {
            const onScroll = () => {
                handleThumbPosition();
            };

            handleThumbPosition();
            contentElement.addEventListener("scroll", onScroll);

            return () => {
                contentElement.removeEventListener("scroll", onScroll);
            };
        }
    }, [handleThumbPosition]);

    return (
        <div
            className={styles.scrollableContainer}
            data-testid="scrollContainer"
        >
            <div
                ref={contentRef}
                className={styles.contentContainer}
                data-testid="contentContainer"
            >
                {children}
            </div>
            <div
                ref={trackRef}
                className={`${styles.scrollbar} ${
                    isScrollbarVisible ? "" : styles.hiddenScrollbar
                }`}
                onClick={handleTrackClick}
                data-testid="scrollTrack"
            >
                <div
                    ref={thumbRef}
                    data-testid="scrollThumb"
                    className={styles.thumb}
                    style={{ width: `${thumbWidthRef.current}%` }}
                    onMouseDown={handleThumbMouseDown}
                />
            </div>
        </div>
    );
};

export default Scrollbar;
