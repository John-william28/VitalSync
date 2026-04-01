# Multi-stage build pour réduire la taille de l'image et améliorer la sécurité :
# - Le premier stage inclut les dépendances de dev et exécute les tests, mais n'est pas dans l'image finale.
# - Le second stage utilise Alpine (léger) et ne copie que les fichiers de prod, avec un utilisateur non-root pour limiter les risques de sécurité.
# Cela réduit la surface d'attaque et la taille de l'image (pas de node_modules dev, pas de fichiers de test).

# Stage 1: Build et tests
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test

# Stage 2: Production
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/server.js ./
USER node
EXPOSE 3000
CMD ["npm", "start"]