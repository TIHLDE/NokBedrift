#!/usr/bin/env bash

set -e

echo "-> Loading env variables from .env file into shell"
export $(grep -v '^#' .env | xargs)

COMMIT_HASH=$(git rev-parse --short HEAD)

echo "-> Building new Docker image"
docker build --no-cache --build-arg NEXT_PUBLIC_TIHLDE_API_URL=$NEXT_PUBLIC_TIHLDE_API_URL -t bedrift.tihlde.org:$COMMIT_HASH .

echo "-> Stopping and removing old container"
docker rm -f bedrift.tihlde.org

echo "-> Starting new container"
docker run --env-file .env -p 3500:3000 --name bedrift.tihlde.org --restart unless-stopped -d bedrift.tihlde.org:$COMMIT_HASH

