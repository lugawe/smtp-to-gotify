FROM oven/bun:alpine

COPY package.json ./
COPY bun.lock ./
COPY *.js ./

RUN bun install

EXPOSE 1025

ENTRYPOINT ["bun", "index.js"]
