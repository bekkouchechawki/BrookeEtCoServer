import express from 'express';
import bodyParser from 'body-parser';
import { getAllLigneCommande, getLigneCommandeById, createLigneCommande, updateLigneCommande, deleteLigneCommande } from '../controllers/LigneCommandeController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllLigneCommande", getAllLigneCommande);
app.get("/getAllLigneCommande/:id", getLigneCommandeById);
app.post("/createLigneCommande", createLigneCommande);
app.put("/updateLigneCommande/:id", updateLigneCommande);
app.delete("/deleteLigneCommande/:id", deleteLigneCommande);

export default app;