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
});
