import express from 'express';
import bodyParser from 'body-parser';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js';

const app = express();

app.use(bodyParser.json());

app.get("/", function (request, response) {
  response.send("Bonjour tout le monde Utilisation du serveur Express");
});

app.get("/getAllProducts", getAllProducts);
app.get("/getAllProducts/:id", getProductById);
app.post("/createProduct", createProduct);
app.put("/updateProduct/:id", updateProduct);
app.delete("/deleteProduct/:id", deleteProduct);

export default app;

