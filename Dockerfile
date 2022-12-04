FROM node:18-alpine as builder

WORKDIR /app
RUN npm install -g npm@latest

COPY package.json package-lock.json ./
RUN npm install --omit=dev

FROM node:18-alpine
ENV NODE_ENV production

WORKDIR /app

RUN npm install -g npm@latest
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node
EXPOSE 3000

CMD ["npm", "run", "server"]
