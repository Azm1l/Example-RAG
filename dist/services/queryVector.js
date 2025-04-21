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
exports.queryVectore = queryVectore;
const openAi_1 = require("./openAi");
const pinecone_1 = require("./pinecone");
function queryVectore(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const embedQuestionUser = yield (0, openAi_1.embedTextUser)(text);
        const result = yield (0, pinecone_1.queryPinecone)(embedQuestionUser);
        const prompt = yield (0, openAi_1.buildOpenAiPromt)(text, result);
        const reply = yield (0, openAi_1.chat)(prompt);
        return reply;
    });
}
//# sourceMappingURL=queryVector.js.map