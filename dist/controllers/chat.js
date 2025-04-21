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
exports.test = exports.chatGPT = void 0;
const openAi_1 = require("../services/openAi");
const chatGPT = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { messages } = req.body;
        if (!messages) {
            res.status(400).json({
                error: 'message must have some value'
            });
        }
        const reply = yield (0, openAi_1.chat)(messages);
        res.json({ reply });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            error: 'Something Wrong'
        });
    }
});
exports.chatGPT = chatGPT;
const test = (req, res) => {
    res.send('oke');
};
exports.test = test;
//# sourceMappingURL=chat.js.map