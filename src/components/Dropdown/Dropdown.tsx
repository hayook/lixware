import { useState } from "react";
import styles from "./styles.module.css";
import type { Option, Props, Options } from "./Dropdown.types";

export default function Dropdown<V>({
	options,
	initialOption,
	onSelect: fn
}: Props<V>) {

	const [droped, setDroped] = useState<boolean>(false);
	const toggleMenu = () => setDroped(prev => !prev);

	const [option, setOption] = useState<Option<V> | null>(initialOption || null);

	const onSelect = (option: Option<V>) => {
		setOption(() => option);
		setDroped(() => false);
		if (fn) fn(option);
	}

	return (
		<div className={styles.dropdown}>
			<button
				type="button"
				className={styles.head}
				onClick={toggleMenu}
			>
				{option?.label || "Select type"}
			</button>
			{
				droped && (
					<ul className={styles.options}>
						{
							options.map((o, idx: number) => {
								return (
									<li
										key={idx}
										className={`
										${styles.option} 
										${option?.value === o.value && styles.active}
										`}
									>
										<button
											type="button"
											onClick={() => onSelect(o)}
										>
											{o.label}
										</button>
									</li>
								);
							})
						}
					</ul>
				)
			}
		</div>
	);
}

export type { Option, Options };
