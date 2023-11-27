import { connection } from '../config/db.js';

export const getAllLigneCommande = (request, response) => {

  connection.query("SELECT * FROM LigneCommande", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Lignes de Commandes :', err);
      response.status(500).send('Erreur lors de la récupération des Lignes de Commandes');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getLigneCommandeById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM LigneCommande WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du LigneCommande :', err);
      response.status(500).send('Erreur lors de la récupération du Ligne de Commande');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Ligne de Commande(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Ligne de Commande trouvé",
          data: {}
        });
      }
    }
  });
};

export const createLigneCommande = (request, response) => {
  const ligneCommande = request.body;
  connection.query("INSERT INTO LigneCommande SET ?", ligneCommande, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Ligne de Commande :', err);
      response.status(500).send('Erreur lors de la création du Ligne de Commande');
    } else {
      response.status(200).send("Ligne de Commande ajouté");
    }
  });
};

export const updateLigneCommande = (request, response) => {
  const id = request.params.id;
  const ligneCommande = request.body;
  connection.query("UPDATE LigneCommande SET ? WHERE idProduit = ?", [ligneCommande, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Ligne de Commande :', err);
      response.status(500).send('Erreur lors de la mise à jour du Ligne de Commande');
    } else {
      response.status(200).send("Ligne de Commande modifié");
    }
  });
};

export const deleteLigneCommande = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM LigneCommande WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Ligne de Commande :', err);
      response.status(500).send('Erreur lors de la suppression du Ligne de Commande');
    } else {
      response.status(200).send("Ligne de Commande supprimé");
    }
  });
};