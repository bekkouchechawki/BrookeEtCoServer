import { connection } from '../config/db.js';

export const getAllCategories = (request, response) => {

  connection.query("SELECT * FROM Catégories", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des categories :', err);
      response.status(500).send('Erreur lors de la récupération des categories');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getCategorieById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Catégories WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du categorie :', err);
      response.status(500).send('Erreur lors de la récupération du categorie');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Catégorie(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Catégories trouvé",
          data: {}
        });
      }
    }
  });
};

export const createCategorie = (request, response) => {
  const categorie = request.body;
  connection.query("INSERT INTO Catégories SET ?", categorie, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du categorie :', err);
      response.status(500).send('Erreur lors de la création du produit');
    } else {
      response.status(200).send("Produit ajouté");
    }
  });
};

export const updateCategorie = (request, response) => {
  const id = request.params.id;
  const categorie = request.body;
  connection.query("UPDATE Catégories SET ? WHERE id = ?", [categorie, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du categorie :', err);
      response.status(500).send('Erreur lors de la mise à jour du categorie');
    } else {
      response.status(200).send("categorie modifié");
    }
  });
};

export const deleteCategorie = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Catégories WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du produit :', err);
      response.status(500).send('Erreur lors de la suppression du categorie');
    } else {
      response.status(200).send("categorie supprimé");
    }
  });
};