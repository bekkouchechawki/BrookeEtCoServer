import { connection } from '../config/db.js';

export const getAllFilms = (request, response) => {

  connection.query("SELECT * FROM Films", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Films :', err);
      response.status(500).send('Erreur lors de la récupération des Films');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getFilmsById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Films WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Film :', err);
      response.status(500).send('Erreur lors de la récupération du Film');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Film(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Film trouvé",
          data: {}
        });
      }
    }
  });
};

export const createFilms = (request, response) => {
  const film = request.body;
  connection.query("INSERT INTO Films SET ?", film, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Film :', err);
      response.status(500).send('Erreur lors de la création du Film');
    } else {
      response.status(200).send("Film ajouté");
    }
  });
};

export const updateFilms = (request, response) => {
  const id = request.params.id;
  const film = request.body;
  connection.query("UPDATE Films SET ? WHERE idProduit = ?", [film, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Film :', err);
      response.status(500).send('Erreur lors de la mise à jour du Film');
    } else {
      response.status(200).send("Film modifié");
    }
  });
};

export const deleteFilm = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Films WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Film :', err);
      response.status(500).send('Erreur lors de la suppression du Film');
    } else {
      response.status(200).send("Film supprimé");
    }
  });
};