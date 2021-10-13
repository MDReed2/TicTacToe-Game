#!/bin/bash

curl --include --request POST "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
echo
