export const getNestedProperty = (obj: any, path: string): any => {
    const keys = path.split(".");

    return keys.reduce((acc, key) => {
        const indexedArrMatch = key.match(/^(.+)\[(\d+)\]$/);

        if (indexedArrMatch) {
            const property = indexedArrMatch[1];
            const index = parseInt(indexedArrMatch[2], 10);

            if (Array.isArray(acc[property])) {
                return acc[property][index];
            }
            return undefined;
        }

        return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
};
