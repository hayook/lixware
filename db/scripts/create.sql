-- words table
CREATE TABLE IF NOT EXISTS words (
	word_id INTEGER PRIMARY KEY,
	word_label TEXT,
	word_type_id INT,
	FOREIGN KEY (word_type_id) REFERENCES types (type_id)
);

-- types table
CREATE TABLE IF NOT EXISTS types (
	type_id INTEGER PRIMARY KEY,
	type_label TEXT
);

-- meanings table
CREATE TABLE IF NOT EXISTS meanings (
	meaning_id INTEGER PRIMARY KEY,
	ar_synonym TEXT,
	en_meaning TEXT,
	example TEXT,
	word_id INT,
	FOREIGN KEY (word_id) REFERENCES words (word_id)
);
