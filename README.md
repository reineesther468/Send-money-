# SendMoney – Prototype cliquable

Prototype mobile d'une application de transfert d'argent **Congo → Sénégal** (mobile money). 100 % HTML/CSS/JS, sans dépendance ni build.

## Écrans
Accueil · Envoyer de l'argent · Historique (filtres Tout / Envoyés / Reçus) · Détail de transaction · Opération réussie · Aide (FAQ + recherche) · Compte · Mon profil

## Ce qui est cliquable
- Calcul des frais (2 %) et du montant reçu en direct, boutons rapides 10k / 25k / 50k / 100k
- Un envoi met à jour le solde et ajoute une transaction à l'historique
- Navigation par onglets, bouton retour, afficher/masquer le solde, recharge simulée
- Données fictives : aucune vraie transaction n'est effectuée

## Lancer en local
Ouvrez `index.html` dans un navigateur, ou : `python3 -m http.server 8000`

## Publier sur GitHub Pages
1. Créez un dépôt (ex. `sendmoney-prototype`) et envoyez-y ces fichiers à la racine.
2. **Settings → Pages → Build and deployment → Source : Deploy from a branch → `main` / `(root)`**.
3. Le site sera disponible sur `https://<votre-pseudo>.github.io/sendmoney-prototype/`.

## Structure
```
index.html   structure des écrans
style.css    design (vert SendMoney, cadre téléphone)
app.js       navigation et logique
```
