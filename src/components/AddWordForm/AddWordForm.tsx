"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { CgAdd } from "react-icons/cg";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Dropdown from "@/components/Dropdown/Dropdown";
import type { Option, Options } from "@/components/Dropdown/Dropdown"
import styles from "./styles.module.css";
import { createWord } from "@/actions/createWord";
import { Meanings, Meaning } from "@/lib/client.types";

type Props<V> = {
	options: Options<V>;
}

const initialMeaning: Meaning = {
	arSynonym: "",
	enMeaning: "",
	example: "",
};


export default function AddWordFrom<V>({ options }: Props<V>) {

	const [currentMeaning, setCurrentMeaning] = useState(0);
	const [meanings, setMeanings] = useState<Meanings>([{ ...initialMeaning }]) // This is a shallow copy so we have a nested objects we'll have a problem here, additionally using indecies is not the best option

	// Updates a specific field in the current Meaning
	const handleOnChange = (field: keyof Meaning, newValue: string) => {
		const newMeanings = [...meanings];
		newMeanings[currentMeaning][field] = newValue;
		setMeanings(() => newMeanings);
	}

	const addMeaning = () => {
		setMeanings(p => [...p, { ...initialMeaning }]);
		setCurrentMeaning(p => p + 1);
	}

	// Dropdown logic
	const [wordType, setWordtype] = useState<Option<V>>(options[0]);
	const onSelect = (option: Option<V>) => setWordtype(() => option)

	const [_, action] = useFormState(createWord, {});

	return (
		<form action={action} className={styles.form}>
			<div className={styles.word}>
				<input type="text" name="word" placeholder="Enter word" />
				<Dropdown initialOption={wordType} options={options} onSelect={onSelect} />
				<input type="hidden" name="wordType" value={wordType.value as number} />
			</div>
			<div className={styles.meaningsContainer}>
				<h1>Meanings</h1>
				<div className={styles.meanings}>
					<div className={styles.meaning}>
						<span className={styles.meaningNumber}>{currentMeaning + 1}</span>
						<div className={styles.meaningInputs}>
							<input
								type="text"
								placeholder="Enter translation in Arabi"
								value={meanings[currentMeaning].arSynonym}
								onChange={({ target }) => handleOnChange("arSynonym", target.value)}
							/>
							<textarea
								placeholder="Enter meaning in English"
								value={meanings[currentMeaning].enMeaning}
								onChange={({ target }) => handleOnChange("enMeaning", target.value)}
							></textarea>
							<input
								type="text"
								placeholder="Enter an example"
								value={meanings[currentMeaning].example}
								onChange={({ target }) => handleOnChange("example", target.value)}
							/>
						</div>
						<input type="hidden" name="meanings" value={JSON.stringify(meanings)} />
					</div>
				</div>
				<div className={styles.funcs}>
					<button
						type="button"
						disabled={currentMeaning === 0}
						className={currentMeaning === 0 ? styles.disabled : ""}
						onClick={() => setCurrentMeaning(p => p - 1)}
					>
						<IoIosArrowDropleft />
					</button>

					<button
						type="button"
						onClick={addMeaning}
						className={styles.addMeaning}
					>
						<CgAdd />
					</button>

					<button
						type="button"
						disabled={currentMeaning === meanings.length - 1}
						className={(currentMeaning === meanings.length - 1) ? styles.disabled : ""}
						onClick={() => setCurrentMeaning(p => p + 1)}
					>
						<IoIosArrowDropright />
					</button>
				</div>
			</div>
			<Submit></Submit>
		</form>
	);
}

function Submit() {

	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className={`${styles.addWord} ${pending ? styles.disabled : ""}`}
			disabled={pending}
		>Add word</button>
	);
}
