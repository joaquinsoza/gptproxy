FROM --platform=linux/amd64 node:18-slim

ENV PORT 3000
ENV HOST 0.0.0.0
ENV NODE_ENV=production

WORKDIR /workspace

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start:prod"]