#!/bin/bash

scripts="$(dirname $(realpath $0))"
db="lixware.db"

# Remove db if exists
[ -f $db ] && rm $db

sqlite3 $db < $scripts/create_schema.sql
sqlite3 $db < $scripts/init_data.sql
