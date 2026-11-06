# Prototype – Organisation des fichiers Figma

Un prototype navigable qui reproduit l'interface de Figma (workspaces → teams → dossiers → fichiers) pour **tester et discuter d'une nouvelle organisation de nos fichiers Figma**, sans toucher à Figma.


---

## 1. Installation (une seule fois)

### Prérequis
- **Node.js** (version 18 ou plus récente) : <https://nodejs.org> (prends la version « LTS »).
  Pour vérifier : ouvre le Terminal et tape `node -v`.
- **Git** (pour récupérer le projet) – déjà installé sur la plupart des Mac.

### Récupérer le projet
Dans le Terminal :

```bash
git clone https://github.com/Luc-Maitre/template-orga-figma.git
cd template-orga-figma
npm install
```

> `npm install` télécharge les outils nécessaires. Ça prend une minute et ne se fait qu'une fois.

---

## 2. Lancer le prototype

```bash
npm run dev
```

Le Terminal affiche une adresse du type `http://localhost:5173/`. Ouvre-la dans ton navigateur (Chrome recommandé).

- Les modifications que tu fais dans les fichiers s'affichent **automatiquement** dans le navigateur dès que tu enregistres.
- Pour arrêter le prototype : `Ctrl + C` dans le Terminal.

---

## 3. Naviguer dans le prototype

1. **Accueil** : liste des workspaces (par ex. *leboncoin groupe*). Clique sur un workspace.
2. **Workspace** : liste des teams (par ex. *🎨 Visual Design*, *leboncoin*). Clique sur une team.
3. **Team** : liste des dossiers. Clique sur un dossier.
4. **Dossier** : liste des fichiers et des sous-dossiers.

Utilise les boutons retour de l'interface (ou ceux du navigateur) pour remonter.

---

## 4. Modifier l'organisation (le plus important)

Tout se passe dans **`src/data.js`**, dans la section `COUNTS`. Ouvre-le dans n'importe quel éditeur de texte (VS Code, par exemple).

### Principe
- Chaque **team** est identifiée par son id (`'designops-lbc'`, `'leboncoin'`…).
- Pour chaque team, on écrit la **liste de ses dossiers**.
- Pour chaque dossier, on écrit son **nom** et la **liste de ses fichiers**.

### Exemple : ajouter un dossier avec des fichiers

```js
'leboncoin': [
  { name: '🏠 Immobilier', files: ['Homepage', 'Listing', 'Adview'] },
  { name: '🚘 Automobile', files: ['Homepage', 'Listing'] },
],
```

### Exemple : ajouter un sous-dossier
Utilise `sub('Nom du sous-dossier', [ ...fichiers... ])` dans la liste des fichiers :

```js
{ name: '🏠 Immobilier', files: [
  sub('Discovery et Research', ['Persona 2026', 'Planning']),
  'Homepage',
  'Listing',
  sub('🗃️ Archives'),          // sous-dossier vide
] },
```

### Récapitulatif des formats

| Ce que tu veux | Ce que tu écris |
|---|---|
| Un dossier avec nom et fichiers nommés | `{ name: 'Mon dossier', files: ['Fichier A', 'Fichier B'] }` |
| Un dossier vide | `{ name: 'Mon dossier' }` |
| Un sous-dossier avec fichiers | `sub('Mon sous-dossier', ['Fichier A'])` |
| Un sous-dossier vide | `sub('Mon sous-dossier')` |

Les émojis dans les noms fonctionnent (`'🗃️ Archives'`).

### ⚠️ Petites règles à respecter
- Garde bien les **virgules** entre chaque élément et les **guillemets** autour des noms (`'...'`).
- Si le nom contient une apostrophe, utilise des guillemets doubles : `"Vérification d'identité"`.
- Si la page devient blanche après une modification, c'est presque toujours une virgule, un crochet ou un guillemet oublié : regarde le Terminal, il indique la ligne en cause. Tu peux aussi annuler ta dernière modification (`Cmd + Z`).

### Ajouter une nouvelle team
1. Ajoute-la dans `workspaceTeams` (en bas de `src/data.js`) avec un `id`, un `name`, un nombre de `members`, une lettre (`letter`) et une couleur (`letterBg`) – ou une image (`avatar`).
2. Ajoute la liste de ses dossiers dans `COUNTS`, avec **le même `id`** comme clé.

### Modifier les workspaces
Les listes `myWorkspaces` et `otherWorkspaces` (en haut de `src/data.js`) contrôlent la page d'accueil : nom, nombre de membres, nombre de teams.

---

## 5. Importer une arborescence depuis un tableur

Le fichier `arborescence.csv` (à la racine du dépôt de travail, hors de ce dossier) liste les dossiers et fichiers au format :

```
team_id,folder_name,file_name
designops-lbc,00. [WIP] Rebranding,Spark
designops-lbc,00. [WIP] Rebranding,Horizontal
```

C'est pratique pour préparer une arborescence dans Google Sheets / Excel. Il faut ensuite reporter les noms dans `COUNTS` de `src/data.js`.

---

## 6. Partager le prototype

Pour générer une version statique à héberger ou envoyer :

```bash
npm run build
```

Le résultat est dans le dossier `dist/`. Tu peux le déposer sur n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages…). Pour tester cette version en local : `npm run preview`.

---

## 7. Sauvegarder tes modifications (Git)

```bash
git add .
git commit -m "Décris ce que tu as changé"
git push
```

---

## Structure du projet

```
├── src/
│   ├── data.js      ← ✏️ le fichier à modifier (workspaces, teams, dossiers, fichiers)
│   ├── main.js      ← logique de navigation et d'affichage (pas besoin d'y toucher)
│   └── *.html       ← gabarits des pages (reprise de l'interface Figma)
├── public/          ← images et styles utilisés par le prototype
├── index.html       ← page d'entrée
└── package.json     ← dépendances et commandes
```

## Un problème ?

| Symptôme | Solution |
|---|---|
| `command not found: npm` | Installe Node.js (voir §1), puis rouvre le Terminal. |
| Page blanche après modification | Erreur de syntaxe dans `src/data.js` (virgule, guillemet…). Regarde le message dans le Terminal. |
| Le port est déjà utilisé | Ferme l'ancien Terminal qui fait tourner le prototype, ou relance `npm run dev`. |
| Mes modifications ne s'affichent pas | Vérifie que tu as bien enregistré (`Cmd + S`) et recharge la page. |
