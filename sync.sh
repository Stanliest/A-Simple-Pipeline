#!/bin/sh -e

cd frontend/
yarn build
aws s3 sync build/ s3://a-simple-pipeline