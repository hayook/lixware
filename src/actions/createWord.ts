"use server";

import { prepareMeaningsQuery } from "@/lib/prepareMeaningsQuery";
import { sqlite3 } from "@/lib/sqlite3";

const sql = "INSERT INTO words (word_label, word_type_id) VALUES ((?), (?));";

export async function createWord(state: any, formData: FormData) {
	// Getting client data
	const word = formData.get("word");
	const wordTypeId = formData.get("wordType");
	const meanings = JSON.parse(formData.get("meanings") as string); // should handle the edge cases

	// Connecting to the database
	const db = await sqlite3(process.env.DB as string);
	console.log(" ✓ Word inserted successfully");

	// Inserting the word
	const { lastID: wordId } = await db.run(sql, word, wordTypeId);

	// Inserting the word meanings
	const [meaningsSql, params] = prepareMeaningsQuery(meanings, wordId as number); // should handle the edge cases
	await db.run(meaningsSql, ...params);

	return state;
}
