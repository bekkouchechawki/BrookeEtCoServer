import express from 'express';
import { config } from 'dotenv';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';

config();

const app = express();
const port = process.env.PORT || 1000; 
app.use (cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("Bonjour tout le monde Utilisation du serveur Express");
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

app.get("/getAllProducts/:id", function (request, response) {
    const id = request.params.id;
    const con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  
      con.connect (function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Produit where id=" + id, function (err, result, fields){
        if (err) throw err;
        if (result.length > 0){
        console.log(JSON.stringify(result[0]));
        response.status(200).json({
        message : "produit(s) trouvé(s)",
        data : result[0]
        });
    }
        else{
        
        console. log("Produit non trouvé");
        
        response. status(200).json({
        message : "Aucun produit trouvé",
        data : {}
    });
}
});
});
});

app.post("/createProduct", function(request, response){
    const produit = request.body;
    console.log(produit.description + " " + produit.image + " " + produit.prix + " " + produit.details)
    console.log(JSON. stringify(produit));
    
    const con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
    
    con. connect (function(err) {
    if (err) throw err;
    con.query ("INSERT INTO Produit values(null, '" + produit.description + "', '" + produit.image +
    "', " + produit.prix + ", '" + produit.details + "');", function (err, result, fields) {
    if (err) throw err;
    
    response.status (200).send ("Produit ajouté");
});
});
});

app.put("/updateProduct/:id", function(request, response){
    const id = request.params.id;
    const produit = request.body;
    console.log(produit.description + " " + produit.image + " " + produit.prix + " " + produit.details)
    console.log(JSON.stringify(produit));
    const con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
    
    con.connect(function(err) {
    if (err) throw err;
    con.query("update Produit set description = '" + produit.description + "', image ='" + produit.image +
    "', prix =" + produit.prix + ", details='" + produit.details + "' where id=" + id, function (err, result, fields) {
    if (err) throw err;
    response.status(200).send("Produit modifié");
});
});
});

app.delete("/deleteProduct/:id", function(request, response){
    const id = request.params.id;
    const con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });
    
    con.connect(function(err) {
    if (err) throw err;
    con.query ("DELETE FROM Produit where id=" + id, function (err, result, fields) {
    if (err) throw err;
    response.status(200).send("Produit supprimé");
});
});
});
app.listen(port, () => {
  console.log(`Serveur Express lancé sur le port ${port}`);
});

export default app;
