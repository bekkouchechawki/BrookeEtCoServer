import express from 'express';
import bodyParser from 'body-parser';
import { getAllEmployes, getEmployeById, createEmploye, updateEmploye, deletEmploye } from '../controllers/employeController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllEmployes", getAllEmployes);
app.get("/getAllEmployes/:id", getEmployeById);
app.post("/createEmploye", createEmploye);
app.put("/updateEmploye/:id", updateEmploye);
app.delete("/deletEmploye/:id", deletEmploye);

export default app;