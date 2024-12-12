#!/bin/bash

scripts="$(dirname $(realpath $0))"
db="lixware.db"

if [ -f $db ]; then
	sqlite3 $db < "$scripts/fake_data.sql" && echo "Fake data inserted"
else 
	echo "Database not found." >&2
fi
