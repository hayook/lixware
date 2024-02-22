import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";
import type { Options } from "./Dropdown";


const options: Options<number> = [
	{ value: 1, label: "One" },
	{ value: 2, label: "Two" },
	{ value: 3, label: "Three" },
];
const initialOption = options[0];

test("Testing Jest", () => {
	render(<Dropdown options={options} initialOption={initialOption} />);

	const headButton = screen.getAllByRole("button")[0];
	expect(headButton).toHaveTextContent(initialOption.label);

	const list = screen.queryByRole("list");
	expect(list).toBeNull();

	fireEvent.click(headButton);
	//list = screen.getByRole("list");
	//expect(list).toBeInTheDocument();
});
