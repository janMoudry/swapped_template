import { FC } from "react";

interface ImageCardProps {
	src: string;
	imgRef?: React.RefObject<HTMLDivElement>;

	containerClassName?: string;
	imageClassName?: string;
}

const ImageCard: FC<ImageCardProps> = ({
	src,
	containerClassName,
	imageClassName,
	imgRef,
}) => {
	return (
		<div
			className={`relative w-[100%] h-[100%] ${containerClassName} 
        `}
			ref={imgRef}
		>
			<img
				src={src}
				alt="Image card"
				className={`w-full h-full object-cover rounded-[2rem] ${imageClassName}`}
			/>
		</div>
	);
};

export default ImageCard;
