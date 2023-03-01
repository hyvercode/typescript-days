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
        name: `Awesome Device ${id}`,
        price: 99.5
    }
}

//GET Example
app.get("/", (req: Request, res: Response): void => {
    const product = getProduct(1);
    res.send(product);
});

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

// Response example
app.get("/json/:id", (req: Request, res: Response): void => {
    const product = getProduct(Number(req.params['id']));
    res.json(product);
});

app.get("/jsonp/:id", (req: Request, res: Response): void => {
    const product = getProduct(Number(req.params['id']));
    res.jsonp(product);
});

//Route
app.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
