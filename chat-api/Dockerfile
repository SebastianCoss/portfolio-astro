FROM node:22-alpine
WORKDIR /app
COPY server.mjs cv.md ./
ENV NODE_ENV=production
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:3000/healthz || exit 1
CMD ["node", "server.mjs"]
