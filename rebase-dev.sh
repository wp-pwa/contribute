#!/bin/sh
git checkout dev
git rebase --onto master
git push origin dev