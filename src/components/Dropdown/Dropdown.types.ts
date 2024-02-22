export type Option<V> = {
	value: V;
	label: string;
}

export type Options<V> = Option<V>[];

export type Props<V> = {
	options: Options<V>;
	initialOption?: Option<V>;
	onSelect?: (option: Option<V>) => void;
}
