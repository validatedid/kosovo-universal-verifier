# Stage 0: prepare node alpine image
FROM node:16.13-alpine3.14 AS base
RUN apk add --update --no-cache \
  python3 \
  make \
  g++

## Stage 1: builder
FROM base AS builder-front

ENV REACT_APP_IDENTITY_PROVIDER=https://api-eid.rks-gov.net
ENV REACT_APP_DEMO=https://api-eid.rks-gov.net
ENV REACT_APP_BACKEND_URL=https://api-eid.rks-gov.net/universal-verifier/api
# ENV REACT_APP_BACKEND_URL=http://localhost:3001
ENV REACT_APP_REDIRECT_CALLBACK_LOGIN=https://api-eid.rks-gov.net/universal-verifier/callback
# ENV REACT_APP_REDIRECT_CALLBACK_LOGIN=http://localhost:3000/universal-verifier/callback
ENV REACT_APP_OPENID_CLIENT_ID=universal-verifier
ENV GENERATE_SOURCEMAP=false
ENV PUBLIC_URL=https://api-eid.rks-gov.net/universal-verifier
# ENV PUBLIC_URL=http://localhost:3000/universal-verifier

WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm ci
COPY ./ /usr/src/app/
RUN npm run build

# Stage 2: run nginx
FROM node:16.13-alpine3.14
RUN mkdir -p /app
WORKDIR /app
RUN chown -R node:node /app && chmod -R 755 /app && npm install express
USER node
COPY --from=builder-front /usr/src/app/build /app/build
COPY server.js ./server.js
EXPOSE 3000
CMD ["node", "server.js"]
