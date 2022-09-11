#!/usr/bin/env bash

git add .

MESSAGE = added bash script

git commit -m "$MESSAGE"

git push

osasript -e "display notification 'pushed to remote' with title 'Git Push'"