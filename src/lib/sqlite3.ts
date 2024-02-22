import { Database } from "sqlite3";
import { open } from "sqlite";


export async function sqlite3(filename: string) {
	const db = await open({
		filename,
		driver: Database,
	})
	console.log(" ✓ Connected to SQLite3");

	return db;
}
