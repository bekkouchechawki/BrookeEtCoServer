import express from 'express';
import bodyParser from 'body-parser';
import { getAllLivres, getLivresById, createLivres, updateLivre, deleteLivre } from '../controllers/livresController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllLivres", getAllLivres);
app.get("/getAllLivres/:id", getLivresById);
app.post("/createLivres", createLivres);
app.put("/updateLivre/:id", updateLivre);
app.delete("/deleteLivre/:id", deleteLivre);

export default app;