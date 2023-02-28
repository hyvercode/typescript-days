import express, {Request, Response, Application} from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

interface Product {
    id: number,
    name: string,
    price: number
}

function getProduct(id: number): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

app.get("/", (req: Request, res: Response): void => {
    const product = getProduct(1);
    res.send(product);
});

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
