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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedTextUser = exports.embedText = exports.chat = void 0;
exports.buildOpenAiPromt = buildOpenAiPromt;
const openai_1 = __importDefault(require("openai"));
const openAi = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY
});
const chat = (messages) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openAi.chat.completions.create({
        model: 'gpt-4o',
        messages: [{
                role: 'user',
                content: messages
            }]
    });
    return response.choices[0].message.content;
});
exports.chat = chat;
const embedText = (texts) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openAi.embeddings.create({
        model: 'text-embedding-3-small',
        input: texts
    });
    return response.data.map(d => d.embedding);
});
exports.embedText = embedText;
const embedTextUser = (texts) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield openAi.embeddings.create({
        model: 'text-embedding-3-small',
        input: texts
    });
    return response.data[0].embedding;
});
exports.embedTextUser = embedTextUser;
function buildOpenAiPromt(userQuery, matches) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = matches.map(match => match.metadata.text).join("\n\n");
        const prompt = `
  Gunakan konteks di bawah ini untuk menjawab pertanyaan pengguna.
  
  Konteks:
  ${context}
  
  Pertanyaan:
  ${userQuery}
  
  Jawaban:
  `;
        return prompt;
    });
}
//# sourceMappingURL=openAi.js.map