import { findItemId } from "../findItemId";

describe("findItemId", () => {
    it("Finds the first id in a simple object", () => {
        const obj = { id: 123, name: "Alice" };
        expect(findItemId(obj)).toBe(123);
    });

    it("Finds the first id in a nested object", () => {
        const obj = { user: { id: 456, name: "Bob" } };
        expect(findItemId(obj)).toBe(456);
    });

    it("Finds the first id in a deeply nested object", () => {
        const obj = {
            product: { info: { id: 789 } },
            user: { profile: { id: 999 } },
        };
        expect(findItemId(obj)).toBe(789);
    });

    it("Returns null if no id is found", () => {
        const obj = { name: "Alice", age: 25 };
        expect(findItemId(obj)).toBeNull();
    });

    it("Handles an empty object", () => {
        expect(findItemId({})).toBeNull();
    });

    it("Finds id inside an array", () => {
        const obj = { users: [{ id: 111 }, { id: 222 }] };
        expect(findItemId(obj)).toBe(111);
    });

    it("Finds an id with type of string", () => {
        const obj = {
            product: { info: { id: "789" } },
            user: { profile: { id: 999 } },
        };
        expect(findItemId(obj)).toBe("789");
    });
});
