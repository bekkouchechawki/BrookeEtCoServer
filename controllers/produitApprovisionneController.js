import { connection } from '../config/db.js';

export const getAllProduitApprovisionne = (request, response) => {

  connection.query("SELECT * FROM ProduitApprovisionne", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Produits approvisionnes :', err);
      response.status(500).send('Erreur lors de la récupération des produit approvisionne');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getProduitApprovisionneById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM ProduitApprovisionne WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Produit Approvisionne :', err);
      response.status(500).send('Erreur lors de la récupération du Produit Approvisionne');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Produit Approvisionne(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Produit Approvisionne trouvé",
          data: {}
        });
      }
    }
  });
};

export const createProduitApprovisionne = (request, response) => {
  const produitApprovisionne = request.body;
  connection.query("INSERT INTO ProduitApprovisionne SET ?", produitApprovisionne, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Produit Approvisionne :', err);
      response.status(500).send('Erreur lors de la création du Produit Approvisionne');
    } else {
      response.status(200).send("Produit Approvisionne ajouté");
    }
  });
};

export const updateProduitApprovisionne = (request, response) => {
  const id = request.params.id;
  const produitApprovisionne = request.body;
  connection.query("UPDATE ProduitApprovisionne SET ? WHERE idProduit = ?", [produitApprovisionne, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du produit Approvisionne :', err);
      response.status(500).send('Erreur lors de la mise à jour du produit Approvisionne');
    } else {
      response.status(200).send("Produit Approvisionne modifié");
    }
  });
};

export const deleteProduitApprovisionne = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM ProduitApprovisionne WHERE idProduit = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Produit Approvisionne :', err);
      response.status(500).send('Erreur lors de la suppression du Produit Approvisionne');
    } else {
      response.status(200).send("Produit Approvisionne supprimé");
    }
  });
};


