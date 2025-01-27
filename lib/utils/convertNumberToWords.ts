export const convertNumberToWords = (n: number): string => {
    if (n === 0) return "zero";
    if (n >= 1000) return "one thousand";

    const ones: string[] = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens: string[] = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const convertChunk = (num: number): string => {
        if (num === 0) return "";
        if (num < 20) return ones[num];
        if (num < 100)
            return (
                tens[Math.floor(num / 10)] +
                (num % 10 !== 0 ? "-" + ones[num % 10] : "")
            );
        const hundreds = Math.floor(num / 100);
        const remainder = num % 100;
        return (
            ones[hundreds] +
            " hundred" +
            (remainder !== 0 ? " and " + convertChunk(remainder) : "")
        );
    };

    return convertChunk(n);
};
