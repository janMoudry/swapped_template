import Button from "./Button";
import DropdownButton from "./DropdownButton";
import SvgIcon from "./SvgIcon";

const Header = () => {
	return (
		<header className=" fixed top-10 w-[95%] ml-[2.5%] bg-primary-light text-primary-dark p-4 text-center rounded-full z-50 h-[80px] flex justify-between items-center animate-fade-down animate-delay-300">
			<nav className="flex gap-5 items-center justify-center">
				<DropdownButton>Visitors</DropdownButton>
				<DropdownButton>Hosts</DropdownButton>
				<DropdownButton>About</DropdownButton>
			</nav>
			<SvgIcon
				icon="AppTitle"
				className="h-[90%] w-[15rem] hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
			/>
			<section className="flex gap-5">
				<Button isSecondary>Sign in</Button>
				<Button>Join</Button>
			</section>
		</header>
	);
};

export default Header;
