import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from './routes/routesProduit.js';
import categorieRoutes from './routes/routesCategorie.js';
import clientRoutes from './routes/routesClient.js';
import commandeRoutes from './routes/routesCommande.js';
import livraisonRoutes from './routes/routesLivraison.js';
import employeRoutes from './routes/routesEmploye.js';
import approvisionnementRoutes from './routes/routesApprovisionnement.js';
import produitApprovisionneRoutes from './routes/routesProduitApprovisionne.js';
import livresRoutes from './routes/routesLivres.js';
import filmsRoutes from './routes/routesFilms.js';
import jeuxRoutes from './routes/routesJeux.js';
import ligneCommandeRoutes from './routes/routesLigneCommande.js';
import fournisseursRoutes from './routes/routesFournisseurs.js';

config();

const app = express();

const port = process.env.PORT || 8080; 

app.use (cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/BrookeEtCo', productRoutes, categorieRoutes, clientRoutes,commandeRoutes ,livraisonRoutes,employeRoutes,approvisionnementRoutes,produitApprovisionneRoutes,livresRoutes,filmsRoutes,jeuxRoutes,ligneCommandeRoutes,fournisseursRoutes);


app.listen(port, () => {
  console.log(`Serveur Express lancé sur le port ${port}`);
});








