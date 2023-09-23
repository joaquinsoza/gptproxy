FROM --platform=linux/amd64 node:18-slim

ENV PORT 3000
ENV HOST 0.0.0.0

WORKDIR /workspace

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

ENV NODE_ENV=production

CMD ["npm", "run", "start:prod"]