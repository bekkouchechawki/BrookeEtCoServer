import { connection } from '../config/db.js';

export const getAllCommandes = (request, response) => {

  connection.query("SELECT * FROM Commande", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Commandes :', err);
      response.status(500).send('Erreur lors de la récupération des Commandes');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getCommandeById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Commande WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Commande :', err);
      response.status(500).send('Erreur lors de la récupération du Commande');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Commande(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Commande trouvé",
          data: {}
        });
      }
    }
  });
};

export const createCommande = (request, response) => {
  const commande = request.body;
  connection.query("INSERT INTO Commande SET ?", commande, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Commande :', err);
      response.status(500).send('Erreur lors de la création du Commande');
    } else {
      response.status(200).send("Commande ajouté");
    }
  });
};

export const updateCommande = (request, response) => {
  const id = request.params.id;
  const commande = request.body;
  connection.query("UPDATE Commande SET ? WHERE id = ?", [commande, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Commande :', err);
      response.status(500).send('Erreur lors de la mise à jour du Commande');
    } else {
      response.status(200).send("Commande modifié");
    }
  });
};

export const deleteCommande = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Commande WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Commande :', err);
      response.status(500).send('Erreur lors de la suppression du Commande');
    } else {
      response.status(200).send("Commande supprimé");
    }
  });
};

