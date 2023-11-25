import { connection } from '../config/db.js';

export const getAllLivraison = (request, response) => {

  connection.query("SELECT * FROM Livraison", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Livraisons :', err);
      response.status(500).send('Erreur lors de la récupération des Livraisons');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getLivraisonById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Livraison WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Livraison :', err);
      response.status(500).send('Erreur lors de la récupération du Livraison');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Livraison(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Livraison trouvé",
          data: {}
        });
      }
    }
  });
};

export const createLivraison = (request, response) => {
  const livraison = request.body;
  connection.query("INSERT INTO Livraison SET ?", livraison, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Livraison :', err);
      response.status(500).send('Erreur lors de la création du Livraison');
    } else {
      response.status(200).send("Livraison ajouté");
    }
  });
};

export const updateLivraison = (request, response) => {
  const id = request.params.id;
  const livraison = request.body;
  connection.query("UPDATE Livraison SET ? WHERE id = ?", [livraison, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Livraison :', err);
      response.status(500).send('Erreur lors de la mise à jour du Livraison');
    } else {
      response.status(200).send("Livraison modifié");
    }
  });
};

export const deleteLivraison = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Livraison WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Livraison :', err);
      response.status(500).send('Erreur lors de la suppression du Livraison');
    } else {
      response.status(200).send("Livraison supprimé");
    }
  });
};


