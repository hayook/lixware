import AddWordFrom from "@/components/AddWordForm/AddWordForm";
import { prepareOptions } from "@/lib/prepareOptions";
import { sqlite3 } from "@/lib/sqlite3";
import styles from "./styles.module.css";

const sql = "SELECT * FROM types;";

export default async function NewWordPage() {

	// Connecting to the database
	const db = await sqlite3(process.env.DB as string);

	// Get all word types from the types table
	const types = await db.all(sql);

	// Transform the types to a valid type for the Dropdown component
	const options = types.map(type => prepareOptions(type));

	return (
		<div className={`container ${styles.container}`}>
			<AddWordFrom options={options} />
		</div>
	);
}

export const revalidate = 86400;
