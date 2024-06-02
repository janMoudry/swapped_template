import React, { FC } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	modalNumber: number;
	classname?: string;
	content: React.ReactNode;
	footer: React.ReactNode;

	title?: string;
	footerClassName?: string;
	mainClassName?: string;
	t: (key: string) => string;
}

const Modal: FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	modalNumber = 1,
	classname,
	content,
	footer,

	footerClassName,
	mainClassName,
	t,
}) => {
	const handleClose = () => {
		onClose();
	};

	if (!isOpen) return null;

	const zIndex = 1000 + modalNumber;

	return (
		<>
			<div
				className="fixed inset-0 flex justify-center items-center modal-show"
				onClick={handleClose}
				style={{
					zIndex: zIndex,
				}}
			/>
			<div
				className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[35rem] bg-white opacity-1 rounded-xl flex flex-col justify-between items-center p-4 gap-10 shadow-2xl  ${classname}`}
				style={{
					zIndex: zIndex + 1,
				}}
			>
				{title && (
					<header className="flex justify-between items-center w-full h-14 rounded-t-md p-4 gap-2">
						<>
							{" "}
							<h1 className="text-xl font-bold text-primary">
								{t(title)}
							</h1>
							<span />
						</>
					</header>
				)}
				<main className={`w-full ${mainClassName}`}>{content}</main>
				{footer && (
					<footer className={`w-full ${footerClassName}`}>
						{footer}
					</footer>
				)}
			</div>
		</>
	);
};

export default Modal;
