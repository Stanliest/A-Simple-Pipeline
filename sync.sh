#!/bin/bash

cd frontend/
yarn install
yarn build
aws s3 sync build/ s3://a-simple-pipeline