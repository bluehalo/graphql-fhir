FROM node:11-alpine

# Update any outdated packages
RUN apk update

WORKDIR /srv

# Move this separately so install get's cached
COPY package.json /srv/package.json
RUN yarn install --production

# Copy the remaining code over
COPY . /srv/

# By default, use the production command
CMD yarn start
