#!/bin/bash

echo "Starting Migrations -> "
yarn run knex migrate:latest

echo "Building Server -> "
yarn build

echo "Starting Server -> "
yarn start
