import express from 'express';
import bodyParser from 'body-parser';
import { getAllCommandes, getCommandeById, createCommande, updateCommande, deleteCommande } from '../controllers/commandeController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllCommandes", getAllCommandes);
app.get("/getAllCommandes/:id", getCommandeById);
app.post("/createCommande", createCommande);
app.put("/updateCommande/:id", updateCommande);
app.delete("/deleteCommande/:id", deleteCommande);

export default app;