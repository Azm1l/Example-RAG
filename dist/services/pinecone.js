"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertToPinecone = insertToPinecone;
exports.queryPinecone = queryPinecone;
const pinecone_1 = require("@pinecone-database/pinecone");
const pc = new pinecone_1.Pinecone({
    apiKey: process.env.PINECONE_KEY
});
const index = pc.index('trial');
function insertToPinecone(vectors) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index.upsert(vectors);
    });
}
function queryPinecone(vector) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryResponse = yield index.query({
                vector,
                topK: 5,
                includeValues: false,
                includeMetadata: true,
            });
            return queryResponse.matches;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
//# sourceMappingURL=pinecone.js.map