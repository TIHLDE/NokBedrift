FROM node:current-alpine AS builder

RUN npm install -g pnpm

WORKDIR /build

COPY . .

RUN pnpm i --frozen-lockfile

ARG SKIP_ENV_VALIDATION=1
ARG NEXT_PUBLIC_TIHLDE_API_URL

RUN pnpm build

FROM node:current-alpine AS runner

WORKDIR /app

RUN apk add openssl

COPY --from=builder /build/.next/standalone ./
COPY --from=builder /build/.next/static ./.next/static/
COPY --from=builder /build/public ./public/

RUN rm -f .env

ENV NEXT_TELEMETRY_DISABLED=1

CMD [ "node", "server.js" ]
