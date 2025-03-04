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

    it("should return the correct value when accessing an array element using an index", () => {
        const obj = {
            user: {
                friends: ["Alice", "Bob", "Charlie"],
            },
        };

        const result = getNestedProperty(obj, "user.friends[1]");
        expect(result).toBe("Bob");
    });

    it("should return undefined if the index is out of bounds", () => {
        const obj = {
            user: {
                friends: ["Alice", "Bob", "Charlie"],
            },
        };

        const result = getNestedProperty(obj, "user.friends[5]");
        expect(result).toBeUndefined();
    });

    it("should return undefined if the property is not an array", () => {
        const obj = {
            user: {
                name: "John",
            },
        };

        const result = getNestedProperty(obj, "user.name[0]");
        expect(result).toBeUndefined();
    });

    it("should return undefined if the property does not exist", () => {
        const obj = {
            user: {
                name: "John",
            },
        };

        const result = getNestedProperty(obj, "user.friends[0]");
        expect(result).toBeUndefined();
    });
});
