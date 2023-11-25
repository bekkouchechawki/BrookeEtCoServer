import { connection } from '../config/db.js';

export const getAllProducts = (request, response) => {

  connection.query("SELECT * FROM Produits", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits :', err);
      response.status(500).send('Erreur lors de la récupération des produits');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getProductById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Produits WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du produit :', err);
      response.status(500).send('Erreur lors de la récupération du produit');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "produit(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun produit trouvé",
          data: {}
        });
      }
    }
  });
};

export const createProduct = (request, response) => {
  const produit = request.body;
  connection.query("INSERT INTO Produits SET ?", produit, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du produit :', err);
      response.status(500).send('Erreur lors de la création du produit');
    } else {
      response.status(200).send("Produit ajouté");
    }
  });
};

export const updateProduct = (request, response) => {
  const id = request.params.id;
  const produit = request.body;
  connection.query("UPDATE Produits SET ? WHERE id = ?", [produit, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du produit :', err);
      response.status(500).send('Erreur lors de la mise à jour du produit');
    } else {
      response.status(200).send("Produit modifié");
    }
  });
};

export const deleteProduct = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Produits WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du produit :', err);
      response.status(500).send('Erreur lors de la suppression du produit');
    } else {
      response.status(200).send("Produit supprimé");
    }
  });
};


