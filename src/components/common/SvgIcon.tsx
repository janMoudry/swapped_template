import * as React from "react";
import * as InterfaceIcons from "@assets/svg";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	icon: keyof typeof InterfaceIcons;
}

const SvgIcon: React.FC<IconProps> = ({ icon, color, ...rest }) => {
	const IconComponent = InterfaceIcons[icon] as
		| React.FC<React.SVGProps<SVGSVGElement>>
		| undefined;

	if (!IconComponent) {
		console.error(`Icon ${icon} does not exist`);

		return null;
	}

	return (
		<IconComponent {...rest} fill={color ?? "var(--text-color-primary)"} />
	);
};

export default SvgIcon;
