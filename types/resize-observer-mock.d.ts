declare global {
    interface ResizeObserver {
        triggerResize: () => void;
    }
}

export {};
