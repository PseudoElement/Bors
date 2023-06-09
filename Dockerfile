FROM node:16-alpine

# ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

# Create app directory
WORKDIR /app

RUN apk add --no-cache git && apk add --no-cache python3 py3-pip && apk add openssh
RUN apk add --no-cache libc6-compat autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev
RUN npm config set shell sh


RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 220000

RUN npm cache clear --force
RUN npm cache verify
# RUN npm install --registry=https://registry.npmjs.org/

COPY package.json \
    # package-lock.json \
    next.config.js \
    vercel.json \
    tsconfig.json ./

COPY . .

# RUN yarn add sharp -S
# RUN yarn add node-gyp
RUN yarn

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]