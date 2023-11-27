import { connection } from '../config/db.js';

export const getAllEmployes = (request, response) => {

  connection.query("SELECT * FROM Employe", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Employes :', err);
      response.status(500).send('Erreur lors de la récupération des Employes');
    } else {
      response.status(200).json(result);
    }
    connection.end(); 
  });
};

export const getEmployeById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Employe WHERE matricule = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération d employe :', err);
      response.status(500).send('Erreur lors de la récupération d employe');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Employe(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Employe trouvé",
          data: {}
        });
      }
    }
  });
};

export const createEmploye = (request, response) => {
  const employe = request.body;
  connection.query("INSERT INTO Employe SET ?", employe, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Employe :', err);
      response.status(500).send('Erreur lors de la création du Employe');
    } else {
      response.status(200).send("Employe ajouté");
    }
  });
};

export const updateEmploye = (request, response) => {
  const id = request.params.id;
  const employe = request.body;
  connection.query("UPDATE Employe SET ? WHERE matricule = ?", [employe, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour d employe :', err);
      response.status(500).send('Erreur lors de la mise à jour d employe');
    } else {
      response.status(200).send("Employe modifié");
    }
  });
};

export const deletEmploye = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Employe WHERE matricule = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression d employe :', err);
      response.status(500).send('Erreur lors de la suppression d employe');
    } else {
      response.status(200).send("Employe supprimé");
    }
  });
};


