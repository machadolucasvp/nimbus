FROM node:12-alpine AS builder
WORKDIR /opt/app
COPY package*.json ./
RUN npm install --silent
COPY . ./
RUN npm run clean && \
  npm run build

FROM node:12-alpine
WORKDIR /opt/app
COPY --from=builder /opt/app/dist ./dist
COPY package*.json ormconfig.json ./
RUN npm install --silent --production
EXPOSE 8001
CMD ["npm", "start"]