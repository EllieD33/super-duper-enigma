export const convertToPascalCase = (string: string): string => {
    const wordArr = string.split(" ");
    return wordArr
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};
