"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceContents = void 0;
exports.replaceContents = (start, end, readme, contents) => {
    if (!readme.includes(start) || !readme.includes(end))
        throw new Error("Starting and ending string not found");
    const startString = readme.split(start)[0];
    const endString = readme.split(end)[1];
    return `${startString}${start}${contents}${end}${endString}`;
};
