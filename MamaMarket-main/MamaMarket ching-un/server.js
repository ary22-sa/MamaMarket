const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Pour lire les données envoyées par ton HTML

// Configuration de la connexion à ta base MySQL Workbench
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Ton utilisateur MySQL (souvent root)
    password: 'triphene', // Remplace par mon mot de passe
    database: 'mamamarket_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('✅ Connecté à la base de données MamaMarket !');
});

// --- TES ROUTES (LES CHEMINS) ---

// 1. Route pour voir tous les produits (utile pour produits.html)
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
});

// 2. Route pour l'inscription (utile pour signup.html)
app.post('/register', (req, res) => {
    const { nom_complet, email, mot_de_passe, role } = req.body;
    const sql = "INSERT INTO users (nom_complet, email, mot_de_passe, role) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [nom_complet, email, mot_de_passe, role], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Utilisateur créé avec succès !", id: result.insertId });
    });
});

app.listen(3000, () => {
    console.log('🚀 Serveur lancé sur http://localhost:3000');
});
// Route pour créer une nouvelle négociation
app.post('/negotiate', (req, res) => {
    const { produit_id, acheteur_id, prix_propose } = req.body;

    // On prépare la requête SQL
    // Le statut est 'en_attente' par défaut (configuré dans MySQL)
    const sql = "INSERT INTO negotiations (produit_id, acheteur_id, prix_propose) VALUES (?, ?, ?)";

    db.query(sql, [produit_id, acheteur_id, prix_propose], (err, result) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ error: "Erreur lors de l'enregistrement de l'offre" });
        }
        res.json({ 
            message: "Offre envoyée à la vendeuse !", 
            negotiationId: result.insertId 
        });
    });
});
// Route pour tester l'insertion d'une négociation
app.post('/api/negocier', (req, res) => {
    const { produit_id, prix_propose } = req.body;
    
    // On simule un acheteur_id = 1 pour le test
    const sql = "INSERT INTO negotiations (produit_id, acheteur_id, prix_propose) VALUES (?, 1, ?)";
    
    db.query(sql, [produit_id, prix_propose], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erreur base de données");
        }
        res.json({ message: "Négociation enregistrée !", id: result.insertId });
    });
});
// Route pour enregistrer une nouvelle "Mama" ou un client
app.post('/api/inscription', (req, res) => {
    const { nom, email, mdp, role } = req.body;

    const sql = "INSERT INTO users (nom_complet, email, mot_de_passe, role) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [nom, email, mdp, role], (err, result) => {
        if (err) {
            console.error("Erreur d'insertion :", err);
            return res.status(500).json({ error: "L'email existe peut-être déjà !" });
        }
        res.json({ message: "Inscription réussie !", id: result.insertId });
    });
});