import express from 'express';
import bodyParser from 'body-parser';
import { getAllClients, getClientById, createClient, updateClient, deleteClient } from '../controllers/clientController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllClients", getAllClients);
app.get("/getAllClients/:id", getClientById);
app.post("/createClient", createClient);
app.put("/updateClient/:id", updateClient);
app.delete("/deleteClient/:id", deleteClient);

export default app;

