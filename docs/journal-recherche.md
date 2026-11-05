# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Comment écrire des données de manière asynchrone dans un fichier JSON | Node.js | Il faut utiliser le module fs/promises avec writeFile couplé à JSON.stringify pour formater et enregistrer l'objet proprement en évitant de bloquer le thread principal. | stockage.js |
| Gérer les promesses avec async/await dans une boucle de menu | MDN | L'utilisation d'une fonction asynchrone permet d'attendre la saisie utilisateur via readline avant de continuer l'exécution de la boucle while. | app.js |
| Comment structurer un tableau d'objets en JavaScript | Cours | Un tableau permet de stocker plusieurs observations de terrain sous forme d'objets, facilitant ainsi leur manipulation et leur filtrage. | app.js |
| A comprendre le brief 3 | Claude.ai | Comment décomposer le travail, suivre les étapes et structurer les fichiers du projet |  Globalement pour le projet |
