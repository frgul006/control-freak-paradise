#!/bin/bash
find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' \;
