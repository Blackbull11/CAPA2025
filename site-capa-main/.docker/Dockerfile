# Config de l'image
FROM node:20
WORKDIR /usr/local/app

# Installation des dépendances npm
COPY package.json ./
RUN npm install

# Ajout de tout les fichier
COPY vite.config.js tailwind.config.js postcss.config.js ./
COPY src ./src
COPY server ./server
COPY public ./public
COPY .env index.html server.js ./

# Build de l'app
RUN npm run build

# Environnement de production
ENV NODE_ENV production
ENV DOTENV_CONFIG_PATH .env.production

# Rendre accessible le port 3000
EXPOSE ${PORT}

# Lancement du serveur
CMD ["node", "server.js"]