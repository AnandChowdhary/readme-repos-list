"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replace_1 = require("./replace");
test("throws if string not found", () => {
    try {
        (0, replace_1.replaceContents)("<!--start-->", "<!--end-->", "Hello", "world");
    }
    catch (error) {
        expect(error).toBeDefined();
    }
});
test("replaces string", () => {
    expect((0, replace_1.replaceContents)("<!--start-->", "<!--end-->", "Hello <!--start-->OK<!--end--> person", "nice")).toBe("Hello <!--start-->nice<!--end--> person");
});
//# sourceMappingURL=index.spec.js.map