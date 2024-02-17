#!/bin/bash
root="$HOME/Documents/lixware"
db="$root/db/lixware.db"

# Remove db if exists
[ -f $db ] && rm $db

sqlite3 $db < "$root/db/scripts/create.sql"

# Done
echo "Database reset."

