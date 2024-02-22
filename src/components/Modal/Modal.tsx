"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

type Props = {
	children: React.ReactNode;
}

export default function Modal({ children }: Props) {

	const router = useRouter();

	const closeModal = () => router.back();

	return (
		<>
			<div className={styles.overlay} onClick={closeModal}></div>
			<div className={styles.modal}>{children}</div>
		</>
	);
}

// Modal example: https://github.com/gopinav/Next.js-14-Tutorials/blob/main/routing-demo/src/components/modal.tsx
