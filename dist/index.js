"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const chat_1 = __importDefault(require("./routes/chat"));
const insertText_1 = __importDefault(require("./routes/insertText"));
const queryVector_1 = __importDefault(require("./routes/queryVector"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/chat', chat_1.default);
app.use('/insert-vector', insertText_1.default);
app.use('/query-vector', queryVector_1.default);
app.get('/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Hello ${name}!`);
});
const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//# sourceMappingURL=index.js.map