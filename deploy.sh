#! /usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git push -f https://github.com/fanwei1991/book-fe.git master:gh-pages

cd -