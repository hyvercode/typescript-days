"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
function getProduct(id) {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    };
}
app.get("/", (req, res) => {
    const product = getProduct(1);
    res.send(product);
});
app.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
