ARG NODE_IMAGE_VERSION

FROM ${NODE_IMAGE_VERSION} as base
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base as dev
WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
CMD ["pnpm", "start:dev"]

FROM base as deps-prod
WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as builder
WORKDIR /app
COPY --from=deps-prod /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM base as prod
WORKDIR /app
EXPOSE ${PORT}
COPY --from=builder /app/dist ./dist
COPY --from=deps-prod /app/node_modules ./node_modules
CMD ["node", "dist/main"]