FROM node:12.16-alpine
RUN mkdir -p /opt/app/.next /opt/app/node_modules /opt/app/public
WORKDIR /opt/app
COPY package.json yarn.lock next.config.js ./
COPY public public
COPY .next .next
COPY node_modules node_modules
ENTRYPOINT [ "yarn", "start", "-p", "80", "-H", "0.0.0.0"]
