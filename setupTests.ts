import "@testing-library/jest-dom";

(globalThis as any).ResizeObserver = jest
    .fn()
    .mockImplementation((callback) => {
        const mockResizeObserver: any = {
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
            triggerResize: () => {
                callback([{ contentRect: { width: 1000, height: 100 } }]);
            },
        };
        return mockResizeObserver;
    });

globalThis.requestAnimationFrame = jest.fn().mockImplementation((callback) => {
    setTimeout(callback, 0);
});
globalThis.cancelAnimationFrame = jest.fn().mockImplementation(clearTimeout);
