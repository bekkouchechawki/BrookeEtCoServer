import express from 'express';
import bodyParser from 'body-parser';
import { getAllProduitApprovisionne, getProduitApprovisionneById, createProduitApprovisionne, updateProduitApprovisionne, deleteProduitApprovisionne } from '../controllers/produitApprovisionneController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllProduitApprovisionne", getAllProduitApprovisionne);
app.get("/getAllProduitApprovisionne/:id", getProduitApprovisionneById);
app.post("/createProduitApprovisionne", createProduitApprovisionne);
app.put("/updateProduitApprovisionne/:id", updateProduitApprovisionne);
app.delete("/deleteProduitApprovisionne/:id", deleteProduitApprovisionne);

export default app;