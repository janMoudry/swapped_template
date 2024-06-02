const BackgroundDots = () => (
	<div className="static top-0 left-0 w-screen animate-fade animate-duration-[2s] z-[-1]">
		<span className="bg-primary-light left-[75vw] top-[15svh] w-[100px] h-[100px] absolute blur-2 rounded-full" />
		<span className="bg-primary-light left-[85vw] top-[30svh] w-[80px] h-[80px] absolute blur-2 rounded-full" />
		<span className="w-[252px] h-[252px] bg-secondary absolute top-[30svh] left-[65vw] rounded-full blur" />
	</div>
);

export default BackgroundDots;
