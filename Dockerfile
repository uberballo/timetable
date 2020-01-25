FROM ubuntu:16.04 as build-stage

RUN apt-get update && apt-get install -y curl git && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt install -y nodejs && \
    git clone https://github.com/uberballo/timetable
WORKDIR /timetable
RUN npm install && npm run build
 
FROM node:10-alpine 
COPY --from=build-stage timetable/build ./build

EXPOSE 3000
RUN npm install -g serve && \
    adduser -D app && \
    chown -R app ./build
USER app

CMD serve build
