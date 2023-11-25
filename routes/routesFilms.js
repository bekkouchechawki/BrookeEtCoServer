import express from 'express';
import bodyParser from 'body-parser';
import { getAllFilms, getFilmsById, createFilms, updateFilms, deleteFilm } from '../controllers/filmsController.js';

const app = express();

app.use(bodyParser.json());

app.get("/getAllFilms", getAllFilms);
app.get("/getAllFilms/:id", getFilmsById);
app.post("/createFilms", createFilms);
app.put("/updateFilms/:id", updateFilms);
app.delete("/deleteFilm/:id", deleteFilm);

export default app;