import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
	title: "Lixware",
	description: "Lixware",
};

type Props = Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>

export default function RootLayout({ children, modal }: Props) {
	return (
		<html lang="en">
			<body>
				{children}
				{modal}
			</body>
		</html>
	);
}
