import { connection } from '../config/db.js';

export const getAllClients = (request, response) => {

  connection.query("SELECT * FROM Client", (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération des Clients :', err);
      response.status(500).send('Erreur lors de la récupération des Clients');
    } else {
      response.status(200).json(result);
    }
  });
};

export const getClientById = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM Client WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la récupération du Client :', err);
      response.status(500).send('Erreur lors de la récupération du Client');
    } else {
      if (result.length > 0) {
        response.status(200).json({
          message: "Client(s) trouvé(s)",
          data: result[0]
        });
      } else {
        response.status(200).json({
          message: "Aucun Client trouvé",
          data: {}
        });
      }
    }
  });
};

export const createClient = (request, response) => {
  const client = request.body;
  connection.query("INSERT INTO Client SET ?", client, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la création du Client :', err);
      response.status(500).send('Erreur lors de la création du Client');
    } else {
      response.status(200).send("Client ajouté");
    }
  });
};

export const updateClient = (request, response) => {
  const id = request.params.id;
  const client = request.body;
  connection.query("UPDATE Client SET ? WHERE id = ?", [client, id], (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la mise à jour du Client :', err);
      response.status(500).send('Erreur lors de la mise à jour du Client');
    } else {
      response.status(200).send("Client modifié");
    }
  });
};

export const deleteClient = (request, response) => {
  const id = request.params.id;
  connection.query("DELETE FROM Client WHERE id = ?", id, (err, result, fields) => {
    if (err) {
      console.error('Erreur lors de la suppression du Client :', err);
      response.status(500).send('Erreur lors de la suppression du Client');
    } else {
      response.status(200).send("Client supprimé");
    }
  });
};
