import express from 'express';
import bodyParser from 'body-parser';
import { getAllApprovisionnement, getApprovisionnementById, createApprovisionnement, updateApprovisionnement, deleteApprovisionnement } from '../controllers/approvisionnementController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllApprovisionnement", getAllApprovisionnement);
app.get("/getAllApprovisionnement/:id", getApprovisionnementById);
app.post("/createApprovisionnement", createApprovisionnement);
app.put("/updateApprovisionnement/:id", updateApprovisionnement);
app.delete("/deleteApprovisionnement/:id", deleteApprovisionnement);

export default app;
