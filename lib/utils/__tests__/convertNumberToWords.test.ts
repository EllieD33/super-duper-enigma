import { convertNumberToWords } from "../convertNumberToWords";

describe("convertNumberToWords", () => {
    const testCases = [
        { input: 0, expected: "zero" },
        { input: 5, expected: "five" },
        { input: 15, expected: "fifteen" },
        { input: 25, expected: "twenty-five" },
        { input: 78, expected: "seventy-eight" },
        { input: 99, expected: "ninety-nine" },
        { input: 101, expected: "one hundred and one" },
        { input: 205, expected: "two hundred and five" },
        { input: 999, expected: "nine hundred and ninety-nine" },
        { input: 1000, expected: "one thousand" },
        { input: 1001, expected: "one thousand" },
    ];

    testCases.forEach(({ input, expected }) => {
        it(`should convert ${input} to "${expected}"`, () => {
            const result = convertNumberToWords(input);
            expect(result).toBe(expected);
        });
    });

    it("should return an empty string for 0 in convertChunk", () => {
        const result = convertNumberToWords(0);
        expect(result).toBe("zero");
    });

    it('should return "one" for 1 in convertChunk', () => {
        const result = convertNumberToWords(1);
        expect(result).toBe("one");
    });

    it('should return "one hundred and five" for 105', () => {
        const result = convertNumberToWords(105);
        expect(result).toBe("one hundred and five");
    });

    it('should return "two hundred and thirteen" for 213', () => {
        const result = convertNumberToWords(213);
        expect(result).toBe("two hundred and thirteen");
    });

    it('should return "three hundred and twenty-four" for 324', () => {
        const result = convertNumberToWords(324);
        expect(result).toBe("three hundred and twenty-four");
    });

    it('should return "four hundred and fifty-six" for 456', () => {
        const result = convertNumberToWords(456);
        expect(result).toBe("four hundred and fifty-six");
    });

    it('should return "one hundred" for 100 (no "and")', () => {
        const result = convertNumberToWords(100);
        expect(result).toBe("one hundred");
    });

    it('should return "zero" for 0', () => {
        const result = convertNumberToWords(0);
        expect(result).toBe("zero");
    });
});
