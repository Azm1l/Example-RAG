"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vectorPipeline_1 = require("../controllers/vectorPipeline");
const router = express_1.default.Router();
router.post('/', vectorPipeline_1.inserTextVectore);
exports.default = router;
//# sourceMappingURL=insertText.js.map