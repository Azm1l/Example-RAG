"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildVectorObjects = void 0;
const buildVectorObjects = (embeddings, texts) => {
    return embeddings.map((vector, i) => ({
        id: `text-${i}`,
        values: vector,
        metadata: { text: texts[i] },
    }));
};
exports.buildVectorObjects = buildVectorObjects;
//# sourceMappingURL=vectorBuilder.js.map