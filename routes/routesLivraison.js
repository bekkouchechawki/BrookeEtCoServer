import express from 'express';
import bodyParser from 'body-parser';
import { getAllLivraison, getLivraisonById, createLivraison, updateLivraison, deleteLivraison } from '../controllers/livraisonController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllLivraison", getAllLivraison);
app.get("/getAllLivraison/:id", getLivraisonById);
app.post("/createLivraison", createLivraison);
app.put("/updateLivraison/:id", updateLivraison);
app.delete("/deleteLivraison/:id", deleteLivraison);

export default app;