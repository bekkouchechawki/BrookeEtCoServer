import { connection } from '../config/db.js';

export const getAllLivres = (request, response) => {

  connection.query("SELECT * FROM Livres", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Livres :', err);
      response.status(500).send('Erreur lors de la récupération des Livres');
    } else {
      response.status(200).json(result);
    }
    connection.end(); 
  });
};

export const getLivresById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Livres WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Livres :', err);
      response.status(500).send('Erreur lors de la récupération du Livres');
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

export const createLivres = (request, response) => {
  const livre = request.body;
  connection.query("INSERT INTO Livres SET ?", livre, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Livre :', err);
      response.status(500).send('Erreur lors de la création du Livre');
    } else {
      response.status(200).send("Livre ajouté");
    }
  });
};

export const updateLivre = (request, response) => {
  const id = request.params.id;
  const livre = request.body;
  connection.query("UPDATE Livres SET ? WHERE idProduit = ?", [livre, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Livre :', err);
      response.status(500).send('Erreur lors de la mise à jour du Livre');
    } else {
      response.status(200).send("Livre modifié");
    }
  });
};

export const deleteLivre = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Livres WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Livre :', err);
      response.status(500).send('Erreur lors de la suppression du Livre');
    } else {
      response.status(200).send("Livre supprimé");
    }
  });
};