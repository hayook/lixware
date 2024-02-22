import Word from "@/components/word/Word";
import styles from "./styles.module.css";
import wordStyles from "./wordstyles.module.css";

type Props = {
	params: {
		word: string;
	}
}


export default function WordPage({ params }: Props) {
	const wordId: number | null = Number(params.word) || null;
	return (
		<div className={`container ${styles.wordPageContainer}`}>
			<Word wordId={wordId} customStyles={wordStyles} />
		</div>
	);
}
