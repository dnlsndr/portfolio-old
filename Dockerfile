FROM node:14-alpine
# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# expose 5000 on container
EXPOSE 80
# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=80
# start the app
CMD [ "npm", "start" ]

ARG API_URL
ENV API_URL ${API_URL}
# copy the app, note .dockerignore
COPY . .