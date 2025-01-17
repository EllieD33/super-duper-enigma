export enum FontWeight {
    Thin = 100,
    ExtraLight = 200,
    Light = 300,
    Regular = 400,
    Medium = 500,
    SemiBold = 600,
    Bold = 700,
    ExtraBold = 800,
    Black = 900,
}

export enum TextTransform {
    None = "none",
    Uppercase = "uppercase",
    Lowercase = "lowercase",
    Capitalise = "capitalise",
}

export enum FontSize {
    Small = "0.8rem",
    Medium = "1rem",
    Large = "1.25rem",
    XL = "1.5rem",
    XXL = "2rem",
    Heading1 = "2rem",
    Heading2 = "1.75rem",
    Heading3 = "1.5rem",
    Heading4 = "1.25rem",
    Heading5 = "1.125rem",
    Heading6 = "1rem",
}

export enum FontFamily {
    Heading = "'Roboto', sans-serif",
    Body = "'Open Sans', sans-serif",
    System = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
}

export const Typography = {
    Heading1: {
        fontSize: FontSize.Heading1,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Heading2: {
        fontSize: FontSize.Heading2,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Heading3: {
        fontSize: FontSize.Heading3,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Heading4: {
        fontSize: FontSize.Heading4,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Heading5: {
        fontSize: FontSize.Heading5,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Heading6: {
        fontSize: FontSize.Heading6,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Heading,
    },
    Paragraph: {
        fontSize: FontSize.Medium,
        fontWeight: FontWeight.Regular,
        fontFamily: FontFamily.Body,
    },
    Span: {
        fontSize: FontSize.Medium,
        fontWeight: FontWeight.Regular,
        fontFamily: FontFamily.Body,
    },
    Strong: {
        fontSize: FontSize.Medium,
        fontWeight: FontWeight.Bold,
        fontFamily: FontFamily.Body,
    },
    Emphasis: {
        fontSize: FontSize.Medium,
        fontWeight: FontWeight.Regular,
        fontFamily: FontFamily.Body,
        fontStyle: "italic",
    },
    Label: {
        fontSize: FontSize.Small,
        fontWeight: FontWeight.Medium,
        fontFamily: FontFamily.Body,
    },
    Small: {
        fontSize: FontSize.Small,
        fontWeight: FontWeight.Regular,
        fontFamily: FontFamily.Body,
    },
    Div: {
        fontSize: FontSize.Medium,
        fontWeight: FontWeight.Regular,
        fontFamily: FontFamily.Body,
    },
} as const;
