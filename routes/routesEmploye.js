import express from 'express';
import bodyParser from 'body-parser';
import { getAllEmployes, getEmployeById, createEmploye, updateEmploye, deletEmploye } from '../controllers/employeController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllEmployes", getAllEmployes);
app.get("/getAllEmployes/:id", getEmployeById);
app.post("/createLivraison", createEmploye);
app.put("/updateLivraison/:id", updateEmploye);
app.delete("/deleteLivraison/:id", deletEmploye);

export default app;