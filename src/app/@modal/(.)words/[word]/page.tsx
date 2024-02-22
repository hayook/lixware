import Modal from "@/components/Modal/Modal";
import Word from "@/components/word/Word";
import styles from "./wordStyles.module.css";

type Props = {
	params: {
		word: string;
	}
}
export default function WordModal({ params }: Props) {
	const wordId: number | null = Number(params.word) || null;

	return (
		<Modal>
			<Word wordId={wordId} customStyles={styles} />
		</Modal>
	);
}
