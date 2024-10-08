#!/usr/bin/env bash

sleep 2
yarn start_db

exec "$@"