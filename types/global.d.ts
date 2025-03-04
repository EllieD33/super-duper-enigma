declare global {
    var ResizeObserver: {
        new (callback: ResizeObserverCallback): ResizeObserver;
        prototype: ResizeObserver;
    };
}

export {};
