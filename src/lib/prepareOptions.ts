import type { Option } from "@/components/Dropdown/Dropdown";
import type { WordType } from "./db.types";

// Creates valid dropdown options type out of database word types
export function prepareOptions(wordType: WordType): Option<number> {
	return {
		value: wordType.type_id,
		label: wordType.type_label,
	}
}
