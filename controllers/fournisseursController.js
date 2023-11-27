import { connection } from '../config/db.js';

export const getAllFournisseurs= (request, response) => {

  connection.query("SELECT * FROM Fournisseurs", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Fournisseurs :', err);
      response.status(500).send('Erreur lors de la récupération des Fournisseurs');
    } else {
      response.status(200).json(result);
    }
    connection.end(); 
  });
};

export const getFournisseursById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Fournisseurs WHERE numero = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Fournisseurs :', err);
      response.status(500).send('Erreur lors de la récupération du Fournisseurs');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Fournisseurs(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Fournisseurs trouvé",
          data: {}
        });
      }
    }
  });
};

export const createFournisseurs = (request, response) => {
  const fournisseurs = request.body;
  connection.query("INSERT INTO Fournisseurs SET ?", fournisseurs, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Fournisseurs :', err);
      response.status(500).send('Erreur lors de la création du Fournisseurs');
    } else {
      response.status(200).send("Fournisseurs ajouté");
    }
  });
};

export const updateFournisseurs = (request, response) => {
  const id = request.params.id;
  const fournisseurs = request.body;
  connection.query("UPDATE Fournisseurs SET ? WHERE numero = ?", [fournisseurs, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Fournisseurs :', err);
      response.status(500).send('Erreur lors de la mise à jour du Fournisseurs');
    } else {
      response.status(200).send("Fournisseurs modifié");
    }
  });
};

export const deleteFournisseurs = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Fournisseurs WHERE numero = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Livre :', err);
      response.status(500).send('Erreur lors de la suppression du Livre');
    } else {
      response.status(200).send("Livre supprimé");
    }
  });
};