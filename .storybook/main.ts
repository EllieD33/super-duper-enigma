import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-links",
        "@storybook/addon-interactions",
        "@storybook/addon-ally",
        "@storybook/addon-actions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
