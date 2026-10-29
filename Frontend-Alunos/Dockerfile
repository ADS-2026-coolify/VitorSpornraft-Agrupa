# ---------- Build ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration production

# ---------- Runtime ----------
FROM nginx:1.27-alpine

# URL interna do backend (no docker-compose o servico se chama "backend")
ENV BACKEND_URL=http://backend:8080

COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist/AGRUPA/browser /usr/share/nginx/html

EXPOSE 80

