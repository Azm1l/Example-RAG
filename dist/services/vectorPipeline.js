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
exports.processAndStoreTexts = processAndStoreTexts;
const openAi_1 = require("./openAi");
const langchain_1 = require("./langchain");
const vectorBuilder_1 = require("./vectorBuilder");
const pinecone_1 = require("./pinecone");
function processAndStoreTexts(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const splitText = yield (0, langchain_1.textSplit)(text);
        const embedding = yield (0, openAi_1.embedText)(splitText);
        const vectors = (0, vectorBuilder_1.buildVectorObjects)(embedding, splitText);
        yield (0, pinecone_1.insertToPinecone)(vectors);
        return 'data saved';
    });
}
//# sourceMappingURL=vectorPipeline.js.map