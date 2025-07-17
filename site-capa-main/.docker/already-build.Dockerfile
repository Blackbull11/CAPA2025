# Config de l'image
FROM node:20
WORKDIR /usr/local/app

# Environnement de production
ENV NODE_ENV production
ENV DOTENV_CONFIG_PATH .env.production

# Installation des dépendances npm
COPY package.json ./
RUN npm install

# Copie des scripts du server
COPY vite.config.js server.js ./
COPY server ./server

# Copie des fichiers statique
COPY dist ./dist

# Rendre accessible le port 3000
EXPOSE ${PORT}

# Lancement du serveur
CMD ["node", "server.js"]