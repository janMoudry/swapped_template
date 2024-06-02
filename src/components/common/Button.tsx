import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isSecondary?: boolean;
	className?: string;
}

const Button: FC<ButtonProps> = ({
	children,
	isSecondary,
	className,
	...rest
}) => {
	const styleVariant = isSecondary
		? " bg-transparent text-primary border-[2.5px] border-primary hover:bg-primary hover:text-primary-light transition-colors duration-300 ease-in-out"
		: " bg-primary text-primary-light border-[2.5px] border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 ease-in-out";

	return (
		<button
			className={`px-[22px] py-[10px] rounded-full font-[700]  ${styleVariant} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
