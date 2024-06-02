export type ModalsType = {
	open: boolean;
	onClose: () => void;
	t: (key: string) => string;
};
