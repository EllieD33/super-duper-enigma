import React from "react";
import { TextTag } from "../../../constants/TextTags";
import { isValidTagForChildren } from "./isValidTagForChildren";

describe("isValidTagForChildren", () => {
    it("should return true if given a valid child tag", () => {
        const children = <a>Test</a>;
        const result = isValidTagForChildren(TextTag.Paragraph, children);
        expect(result).toBe(true);
    });

    it("should return false if given a valid child tag", () => {
        const children = <div>Test</div>;
        const result = isValidTagForChildren(TextTag.Paragraph, children);
        expect(result).toBe(false);
    });

    it("should return false if given a mix of valid and invalid children", () => {
        const children = (
            <a>
                Test<div>Test</div>
            </a>
        );
        const result = isValidTagForChildren(TextTag.Paragraph, children);
        expect(result).toBe(false);
    });

    it("should work for h tags", () => {
        const children = <a>Test</a>;
        const result = isValidTagForChildren(TextTag.Heading2, children);
        expect(result).toBe(true);
    });

    it("should handle complex nesting", () => {
        const children = (
            <a>
                Test<i>Test</i>
                <div>
                    <p>Test</p>Test
                </div>
            </a>
        );
        const result = isValidTagForChildren(TextTag.Paragraph, children);
        expect(result).toBe(false);
    });

    it("should handle fragments contain invalid tags", () => {
        const children = (
            <>
                <a>
                    Test<i>Test</i>
                    <div>
                        <p>Test</p>Test
                    </div>
                </a>
            </>
        );
        const result = isValidTagForChildren(TextTag.Paragraph, children);
        expect(result).toBe(false);
    });
});
