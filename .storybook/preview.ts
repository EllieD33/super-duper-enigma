import { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
    smallMobile: {
        name: "Small Mobile",
        styles: {
            width: "320px",
            height: "100%",
        },
        type: "mobile",
    },
    largeMobile: {
        name: "Large Mobile",
        styles: {
            width: "425px",
            height: "100%",
        },
        type: "mobile",
    },
    smallTablet: {
        name: "Small Tablet",
        styles: {
            width: "600px",
            height: "100%",
        },
        type: "tablet",
    },
    largeTablet: {
        name: "Large Tablet",
        styles: {
            width: "768px",
            height: "100%",
        },
        type: "tablet",
    },
    regularDesktop: {
        name: "Regular Desktop",
        styles: {
            width: "1024px",
            height: "100%",
        },
        type: "desktop",
    },
    largeDesktop: {
        name: "Large Desktop",
        styles: {
            width: "1440px",
            height: "100%",
        },
        type: "desktop",
    },
};

const preview: Preview = {
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: "#ffffff" },
                { name: "dark", value: "#333333" },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        viewport: {
            viewports: {
                ...MINIMAL_VIEWPORTS,
                ...customViewports,
            },
            defaultViewport: "largeMobile",
        },
    },
};

export default preview;
