# ---- Base Node ----
FROM node:18 AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install
COPY . .

# ---- Build ----
FROM dependencies AS build
RUN npm run build

# ---- Release ----
FROM node:18-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD ["npm", "run", "start:prod"]