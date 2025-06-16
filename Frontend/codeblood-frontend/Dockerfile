# Dockerfile for Next.js (App Router, CSR)

FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use the same Node image for serving
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
