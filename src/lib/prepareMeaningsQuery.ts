import { Meanings } from "./client.types";

// Creates an SQL query to insert an array of Meanings instance
export function prepareMeaningsQuery(meanings: Meanings, wordId: number): [string, (string | number)[]] {
	// Preparing the query
	let sql = "INSERT INTO meanings (ar_synonym, en_meaning, example, word_id) VALUES ";
	const row = "((?), (?), (?), (?))";
	const rows = (row + ",").repeat(meanings.length - 1);
	sql += rows + row + ";";

	// Preparing the query arguments
	const params = [];
	for (let meaning of meanings) {
		params.push(meaning.arSynonym);
		params.push(meaning.enMeaning);
		params.push(meaning.example);
		params.push(wordId);
	}
	return [sql, params];
}
