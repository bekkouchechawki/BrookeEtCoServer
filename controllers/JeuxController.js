import { connection } from '../config/db.js';

export const getAllJeux = (request, response) => {

  connection.query("SELECT * FROM Jeux", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Jeux :', err);
      response.status(500).send('Erreur lors de la récupération des Jeux');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getJeuxById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Jeux WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Jeux :', err);
      response.status(500).send('Erreur lors de la récupération du Jeux');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Livre(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Livre trouvé",
          data: {}
        });
      }
    }
  });
};

export const createJeux = (request, response) => {
  const jeux = request.body;
  connection.query("INSERT INTO Jeux SET ?", jeux, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Jeux :', err);
      response.status(500).send('Erreur lors de la création du Jeux');
    } else {
      response.status(200).send("Jeux ajouté");
    }
  });
};

export const updateJeux = (request, response) => {
  const id = request.params.id;
  const jeux = request.body;
  connection.query("UPDATE Jeux SET ? WHERE idProduit = ?", [jeux, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Jeux :', err);
      response.status(500).send('Erreur lors de la mise à jour du Jeux');
    } else {
      response.status(200).send("Jeux modifié");
    }
  });
};

export const deleteJeux = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Jeux WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Jeux :', err);
      response.status(500).send('Erreur lors de la suppression du Jeux');
    } else {
      response.status(200).send("Jeux supprimé");
    }
  });
};