import express from 'express';
import { config } from 'dotenv';
import mysql from 'mysql2';

config();

const app = express();
const port = process.env.PORT || 1000; 

app.use(express.json());

app.get("/", function (request, response) {
  response.send("Bonjour tout le monde</>Utilisation du serveur Express");
});

app.get("/getAllProducts", function (request, response) {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  con.connect(function (err) {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
      response.status(500).send('Erreur de connexion à la base de données');
    } else {
      con.query("SELECT * FROM Produit", function (err, result, fields) {
        if (err) {
          console.error('Erreur lors de la récupération des produits :', err);
          response.status(500).send('Erreur lors de la récupération des produits');
        } else {
          response.status(200).json(result);
        }
        con.end(); 
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur Express lancé sur le port ${port}`);
});

export default app;
