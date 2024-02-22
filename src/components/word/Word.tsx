import { sqlite3 } from "@/lib/sqlite3";
import defaultStyles from "./styles.module.css";

type Props = {
	wordId: number | null;
	customStyles?: any; // I am not sure if css-modules provides types, anyways i can use ts index signetures
}

export default async function Word({ wordId, customStyles }: Props) {

	// Make sure argument is not null
	customStyles = customStyles || {};

	// Extending the default styles
	const styles = { ...defaultStyles };
	for (let key in styles) {
		styles[key] += ` ${customStyles[key]}`;
	}

	// Connecting to the database
	const db = await sqlite3(process.env.DB as string);

	// Get the word with id specified in the params and it's meanings
	const word = await db.get(sql1, wordId);
	const meanings = await db.all(sql2, wordId)
	const data = { ...word, meanings };

	return (
		<div className={styles.wordCard}>
			<div className={styles.word}>
				<h1>{data.word_label}</h1>
				<span className={styles.type}>{data.word_type}</span>
			</div>
			<div className={styles.meanings}>
				{
					data.meanings.map((meaning: any, idx: number) => {
						return <div key={meaning.meaning_id} className={styles.meaning}>
							<span className={styles.meaningNumber}>{idx + 1}.</span>
							<div className={styles.meaningContent}>
								<p>{meaning.ar_synonym}</p>
								<p>{meaning.en_meaning}</p>
								<p>{meaning.example}</p>
							</div>
						</div>
					})
				}
			</div>
		</div>
	);
}

const sql1 = `
SELECT 
w.word_id,
w.word_label,
t.type_label AS word_type
FROM words w LEFT JOIN types t ON w.word_type_id = t.type_id
WHERE w.word_id = (?);
`;
const sql2 = `
SELECT * FROM meanings WHERE meanings.word_id = (?);
`;
