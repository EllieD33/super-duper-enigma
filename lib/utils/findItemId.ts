export const findItemId = (
    obj: Record<string, any>
): string | number | null => {
    let result: string | number | null = null;

    const search = (current: any) => {
        if (typeof current !== "object" || current === null || result !== null)
            return;

        for (const key in current) {
            if (key === "id") {
                result = current[key];
                return;
            }
            search(current[key]);
            if (result !== null) return;
        }
    };

    search(obj);
    return result;
};
