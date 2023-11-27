import express from 'express';
import bodyParser from 'body-parser';
import { getAllJeux, getJeuxById, createJeux, updateJeux, deleteJeux } from '../controllers/JeuxController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllJeux", getAllJeux);
app.get("/getAllJeux/:id", getJeuxById);
app.post("/createJeux", createJeux);
app.put("/updateJeux/:id", updateJeux);
app.delete("/deleteJeux/:id", deleteJeux);

export default app;