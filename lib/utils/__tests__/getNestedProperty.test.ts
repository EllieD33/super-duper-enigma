import { getNestedProperty } from "../getNestedProperty";

describe("getNestedProperty", () => {
    const data = {
        productInfo: {
            productTags: ["Electronics", "Laptop"],
            productName: "MacBook Pro",
            productPrice: 1200,
        },
        category: "Electronics",
    };

    it("should return a simple property", () => {
        const result = getNestedProperty(data, "category");
        expect(result).toBe("Electronics");
    });

    it("should return a nested property", () => {
        const result = getNestedProperty(data, "productInfo.productName");
        expect(result).toBe("MacBook Pro");
    });

    it("should return undefined if property does not exist", () => {
        const result = getNestedProperty(data, "nonExistentProperty");
        expect(result).toBeUndefined();
    });

    it("should return undefined if nested property does not exist", () => {
        const result = getNestedProperty(
            data,
            "productInfo.nonExistentProperty"
        );
        expect(result).toBeUndefined();
    });

    it("should return array property value", () => {
        const result = getNestedProperty(data, "productInfo.productTags");
        expect(result).toEqual(["Electronics", "Laptop"]);
    });

    it("should handle array property lookup", () => {
        const result = getNestedProperty(data, "productInfo.productTags[0]");
        expect(result).toBe("Electronics");
    });

    it("should return undefined if array index is out of bounds", () => {
        const result = getNestedProperty(data, "productInfo.productTags[5]");
        expect(result).toBeUndefined();
    });

    it("should handle deep nested arrays", () => {
        const dataWithDeepArray = {
            userInfo: {
                posts: [
                    { title: "First Post", tags: ["tech", "coding"] },
                    { title: "Second Post", tags: ["travel", "adventure"] },
                ],
            },
        };
        const result = getNestedProperty(
            dataWithDeepArray,
            "userInfo.posts[1].tags[0]"
        );
        expect(result).toBe("travel");
    });
});
