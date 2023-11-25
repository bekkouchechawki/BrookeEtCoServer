import express from 'express';
import bodyParser from 'body-parser';
import { getAllJeux, getJeuxById, createJeux, updateJeux, deleteJeux } from '../controllers/JeuxController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllJeux", getAllJeux);
app.get("/getAllJeux/:id", getJeuxById);
app.post("/createFilms", createJeux);
app.put("/updateFilms/:id", updateJeux);
app.delete("/deleteFilm/:id", deleteJeux);

export default app;