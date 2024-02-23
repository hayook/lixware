import Link from "next/link";
import { sqlite3 } from "@/lib/sqlite3";
import styles from "./styles.module.css";

const sql = "SELECT word_id, word_label FROM words;";

export default async function Home() {

	// Connect to the database 
	const db = await sqlite3(process.env.DB as string);

	// Get all words from the words table
	const words = await db.all(sql);

	return (
		<>
			<div className={`container ${styles.homeContainer}`}>
				{
					words.map(word => {
						return (
							<Link
								key={word.word_id}
								href={`/words/${word.word_id}`}
								className={styles.wordCard}
							>
								{word.word_label}
							</Link>
						)
					})
				}
			</div>
			<Link className={styles.addWord} href="/new"><span>+</span></Link>
		</>
	);
}

export const dynamic = "force-dynamic"
