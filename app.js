import express from 'express';  // Importe le module Express pour créer le serveur
import { config } from 'dotenv';  // Importe le module dotenv pour gérer les variables d'environnement
import bodyParser from 'body-parser';  // Importe le module body-parser pour analyser les corps des requêtes
import mysql from 'mysql';
import mysql2 from 'mysql2';
const app = express();
config();// Utilisation du port défini dans .env ou 3000 par défaut

const port = process.env.port || 2000;
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Bonjour tout le monde</>Utilisation du serveur Express");
});



// Démarre le serveur sur le port spécifié
app.listen(port, () => {
    console.log(`serveur express lancé sur le port ${port}`)
});





app.get("/getAllProducts", function (request, response) {
  const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM Produit", function (err, result, fields) {
      if (err) throw err;
      response.status(200).json(result);
    });
  });
});

export default app;  // Exportez l'application pour les tests