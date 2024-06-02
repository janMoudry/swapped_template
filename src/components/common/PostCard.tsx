import { columns } from "@MOCKS";
import { useIsVisible } from "@hooks";
import { useRef } from "react";

const PostCard = () => {
	const itemsRef = useRef<HTMLDivElement>(null);

	const isVisible = useIsVisible(itemsRef);

	return (
		<section className="flex gap-[2rem]">
			{columns.map((column, index) => (
				<div
					ref={itemsRef}
					className={`flex flex-col gap-[2rem] justify-center w-1/4 ${
						isVisible ? "animate-fade" : "opacity-0"
					}`}
					style={{
						animationDelay: `${index * 300}ms`,
					}}
					key={index}
				>
					{column.map((post, index2) => (
						<div
							className={`border-[2px] border-primary-light rounded-[2rem] p-8 flex flex-col gap-5 h-fit ${
								isVisible ? "animate-fade-down" : "opacity-0"
							} `}
							style={{
								animationDelay: `${
									index2 * 300 + index * 300 + 200
								}ms`,
							}}
							key={post.id}
						>
							<h3
								className="font-bold text-primary"
								style={{
									fontSize: post.headingSize ?? "18px",
								}}
							>
								{post.title}
							</h3>
							<span className="flex flex-col gap-3">
								{post.description.map((desc, index) => (
									<p key={index}>{desc}</p>
								))}
							</span>
						</div>
					))}
				</div>
			))}
		</section>
	);
};

export default PostCard;
