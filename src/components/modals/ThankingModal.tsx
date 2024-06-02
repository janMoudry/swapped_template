import { ModalsType } from "@types";
import { FC } from "react";
import Modal from "./Modal";
import { Button } from "@components/common";

interface ThankingModalProps extends ModalsType {}

const ThankingModal: FC<ThankingModalProps> = ({ open }) => {
	return (
		<Modal
			t={(key: string) => key}
			isOpen={open}
			onClose={() => {
				window.location.href = "/";
			}}
			modalNumber={1}
			content={
				<div className="flex justify-between items-center px-16 h-full py-16 bg-secondary">
					<Button
						onClick={() => {
							window.location.href = "/";
						}}
					>
						Go back
					</Button>
					<h2 className="text-heading-2 font-bold text-secondary-dark">
						Thanks for being here!
					</h2>
				</div>
			}
			classname="sm:w-[50%] w-[75%] p-0 overflow-hidden rounded-[3rem]"
			footer={null}
		/>
	);
};

export default ThankingModal;
