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
exports.queryVectorUser = queryVectorUser;
const queryVector_1 = require("../services/queryVector");
function queryVectorUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { messages } = req.body;
        if (!messages)
            res.status(400).json({
                error: 'messaga must be have some value'
            });
        const reply = yield (0, queryVector_1.queryVectore)(messages);
        res.json({ reply });
    });
}
//# sourceMappingURL=queryVector.js.map