FROM node:15-alpine

# Update any outdated packages
RUN apk update
RUN apk --no-cache add curl

WORKDIR /srv

# Download the Amazon DocumentDB Certificate Authority (CA) certificate required to authenticate to your cluster
RUN curl https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem --output /srv/rds-combined-ca-bundle.pem

# Move this separately so install get's cached
COPY package.json /srv/package.json
RUN yarn install --production

# Copy the remaining code over
COPY . /srv/

# By default, use the production command
# CMD yarn start
CMD yarn nodemon
