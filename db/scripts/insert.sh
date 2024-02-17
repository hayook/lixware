#!/bin/bash
root="$HOME/Documents/lixware"
db="$root/db/lixware.db"

if [ -f $db ]; then
	sqlite3 $db < "$root/db/scripts/insert.sql"
	echo "Fake data inserted"
else 
	echo "Database not found."
fi
