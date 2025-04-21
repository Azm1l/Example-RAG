"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chat_1 = require("../controllers/chat");
const router = express_1.default.Router();
router.post('/', chat_1.chatGPT);
exports.default = router;
//# sourceMappingURL=chat.js.map