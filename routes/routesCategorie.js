import express  from 'express';
import bodyParser from 'body-parser';
import { getAllCategories, getCategorieById, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categorieController.js';

const app = express();

app.use(bodyParser.json());



app.get("/getAllCategories", getAllCategories);
app.get("/getCategorieById/:id", getCategorieById);
app.post("/createCategorie", createCategorie);
app.put("/updateCategorie/:id", updateCategorie);
app.delete("/deleteCategorie/:id", deleteCategorie);

export default app;