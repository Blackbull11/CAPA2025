# <img src="/public/tete-logo-capa.svg" alt="Logo du CAPA" height="26"/> Site CAPA


Ce dépot contient le **code source du site du CAPA**, accessible à l'adresse [https://capa.etu.imt-nord-europe.fr/](https://capa.etu.imt-nord-europe.fr/). Ce site a été initialement créé par le CAPA 2024.


**Tech-stack :**
 - **Front :** [React](https://fr.react.dev/) et [Vite](https://vitejs.dev/)
 - **Back :** [Express](https://expressjs.com/) et [Node](https://nodejs.org/)


## Contribuer

Avant de contribuer au projet, contactez Gaspard Beunier _([@gaspard.beunier](https://gitlab.etu.imt-nord-europe.fr/gaspard.beunier))_.

### Installation

Pour installer le projet sur votre ordinateur, commencez par cloner le repo dans un dossier de votre ordinateur. Pour l'utiliser, vous devez avoir installé une version LTS de Node *(pour l'instant la v20.14.0)*.

> Pour avoir Node facilement sur votre ordinateur, vous pouvez par exemple utiliser `nvm` *(guide d'installation pour [MacOS/Linux](https://github.com/nvm-sh/nvm), ou pour [Windows]())*.

> Il est aussi possible d'utiliser le devcontainer préconfiguré dans le projet *([en savoir plus sur les devcontainers](https://code.visualstudio.com/docs/devcontainers/containers))*.



Enfin, pour lancer le projet, ouvrez un terminal et entrez les commandes suivantes :
- `npm install`
- `npm run dev`

Vous pouvez alors y accéder à l'adresse [http://127.0.0.1:3000/](http://127.0.0.1:3000/).


## Production et deployement

Pour déployer le projet, ouvrez un terminal et entrez les commandes suivantes :
- `npm install`
- `npm run build`
- `npm run prod`
