import { connection } from '../config/db.js';

export const getAllApprovisionnement = (request, response) => {

  connection.query("SELECT * FROM Approvisionnement", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Approvisionnements :', err);
      response.status(500).send('Erreur lors de la récupération des Approvisionnements');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getApprovisionnementById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Approvisionnement WHERE numero = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération d Approvisionnement :', err);
      response.status(500).send('Erreur lors de la récupération dApprovisionnement');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Approvisionnement(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Approvisionnement trouvé",
          data: {}
        });
      }
    }
  });
};

export const createApprovisionnement = (request, response) => {
  const approvisionnement = request.body;
  connection.query("INSERT INTO Approvisionnement SET ?", approvisionnement, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création d Approvisionnement :', err);
      response.status(500).send('Erreur lors de la création d Approvisionnement');
    } else {
      response.status(200).send("Approvisionnement ajouté");
    }
  });
};

export const updateApprovisionnement = (request, response) => {
  const id = request.params.id;
  const approvisionnement = request.body;
  connection.query("UPDATE Approvisionnement SET ? WHERE numero = ?", [approvisionnement, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour d Approvisionnement :', err);
      response.status(500).send('Erreur lors de la mise à jour d Approvisionnement');
    } else {
      response.status(200).send("Approvisionnement modifié");
    }
  });
};

export const deleteApprovisionnement = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Approvisionnement WHERE numero = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression d Approvisionnement :', err);
      response.status(500).send('Erreur lors de la suppression d Approvisionnement');
    } else {
      response.status(200).send("Approvisionnement supprimé");
    }
  });
};

