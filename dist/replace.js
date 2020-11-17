"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceContents = void 0;
exports.replaceContents = (start, end, readme, contents) => {
    if (!readme.includes(start) || !readme.includes(end)) {
        console.log("Starting and ending string not found");
        return readme;
    }
    const startString = readme.split(start)[0];
    const endString = readme.split(end)[1];
    return `${startString}${start}${contents}${end}${endString}`;
};
//# sourceMappingURL=replace.js.map