import express from 'express';
import bodyParser from 'body-parser';
import { getAllFournisseurs, getFournisseursById, createFournisseurs, updateFournisseurs, deleteFournisseurs } from '../controllers/fournisseursController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllFournisseurs", getAllFournisseurs);
app.get("/getAllFournisseurs/:id", getFournisseursById);
app.post("/createFournisseurs", createFournisseurs);
app.put("/updateFournisseurs/:id", updateFournisseurs);
app.delete("/deleteFournisseurs/:id", deleteFournisseurs);

export default app;