import React from "react";
import { render, screen } from "@testing-library/react";
import Hero, { HeroProps } from "./Hero";

const defaultProps: HeroProps = {};

describe("Hero", () => {
    it("should render the default component", () => {
        // const container = render(<Hero {...defaultProps} />);
        // expect(container).toMatchSnapshot();
    });
});
