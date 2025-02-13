import { convertToPascalCase } from "../convertToPascalCase";

describe("convertToPascalCase", () => {
    it("should return a string in Pascal Case", () => {
        const input = "hello";
        const output = convertToPascalCase(input);
        expect(output).toBe("Hello");
    });

    it("should handle mutli-word strings", () => {
        const input = "hello world";
        const output = convertToPascalCase(input);
        expect(output).toBe("Hello World");
    });

    it("should ignore numbers", () => {
        const input = "then there were 2";
        const output = convertToPascalCase(input);
        expect(output).toBe("Then There Were 2");
    });

    it("should ignore punctuation", () => {
        const input = "then - hello world!";
        const output = convertToPascalCase(input);
        expect(output).toBe("Then - Hello World!");
    });
});
