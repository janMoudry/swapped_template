import { Button, ImageCard } from "@components/common";
import PostCard from "@components/common/PostCard";
import { ThankingModal } from "@components/modals";
import { useIsVisible, useModal } from "@hooks";
import { useEffect, useRef } from "react";

const LandingPage = () => {
	const section1 = useRef<HTMLDivElement>(null);
	const section2 = useRef<HTMLDivElement>(null);
	const section3 = useRef<HTMLDivElement>(null);
	const section4 = useRef<HTMLDivElement>(null);
	const section5 = useRef<HTMLDivElement>(null);
	const section6 = useRef<HTMLDivElement>(null);
	const section7 = useRef<HTMLDivElement>(null);

	const isVisible1 = useIsVisible(section1);
	const isVisible2 = useIsVisible(section2);
	const isVisible3 = useIsVisible(section3);
	const isVisible4 = useIsVisible(section4);
	const isVisible5 = useIsVisible(section5);
	const isVisible6 = useIsVisible(section6);
	const isVisible7 = useIsVisible(section7);

	const { trigger, parseValues } = useModal({
		component: ThankingModal,
		key: "thank-you",
	});

	const wasModalViewed = localStorage.getItem("modal-viewed");

	useEffect(() => {
		document.addEventListener(
			"scroll",
			() => {
				if (wasModalViewed) return;

				if (
					window.innerHeight + window.scrollY >=
					document.body.offsetHeight
				) {
					parseValues({});
					trigger();

					localStorage.setItem("modal-viewed", "true");
				}
			},
			{ passive: true }
		);

		return () => {
			document.removeEventListener("scroll", () => {});
		};
	}, []);

	return (
		<div className="flex flex-col px-[8rem] mb-10 gap-[5rem]">
			<section
				ref={section1}
				className={`border-2 border-primary-light rounded-[2rem] text-primary-dark mt-[5rem] py-[7.5rem] px-[5.5rem] gap-8 flex flex-col 
                ${
					isVisible1
						? "animate-fade-up animate-delay-300"
						: "opacity-0"
				}`}
			>
				<h2 className=" text-heading-1 md:max-w-[50%] max-w-[100%] font-[700] text-gradient">
					Travel freely without the burden of high costs
				</h2>
				<p className="text-body-2 md:max-w-[35%] max-w-[100%] font-[500]">
					Traveling with Swapped requires you to only cover service
					and cleaning fees.
					<span className="font-[700]"> It costs $0 to join.</span>
				</p>
				<Button isSecondary className="mt-4 max-w-[10rem]">
					Tell me more
				</Button>
			</section>
			<section className=" flex flex-col gap-[3rem]">
				<div className="grid grid-cols-3 grid-rows-2 gap-[3rem] h-[40rem]">
					<ImageCard
						imgRef={section2}
						src="https://s3-alpha-sig.figma.com/img/1a81/bcee/d0ef39f0ae696e564ea760a5256179b7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ORxhviSgna747T4hZRETOwQR0zyFgMTKJ3qI-JFD-69tuFt0w1djg-w5W8TyfmaaO2XMazsXxaRwhnR8y~bNGWrVUQjLR-dkpjHYhaduYOAVqQyeJraaiSb25mgok-lMxnsDLiLbyzQJc0W22qxpbsWRwM5vsjsmeXUQCiiZHirSI~gZPHcegGULAC1LGWUcgggvlyYWuWlByUVAvKB0AEb0eIHWGakkmbDH2V~fvZhW1UKuro5qxHZR9MqvOfl2S6XqHTRiSJcmR18s7UEUx9EzamEvkweQ7QrM-TiZPmNIktU3X4GxthsbRQWyUQ3zQ0OsD3bbsYWSpfcs6ZlRcg__"
						containerClassName={` row-span-2 h-[40rem] ${
							isVisible2 ? "animate-fade-right" : "opacity-0"
						}`}
					/>
					<ImageCard
						imgRef={section3}
						containerClassName={`${
							isVisible3
								? "animate-fade-down animate-delay-300"
								: "opacity-0"
						}`}
						src="https://s3-alpha-sig.figma.com/img/cd05/74c7/9e92b12d8898ebb47a38d38afc123e8a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTAsQSV1lUpkqfTXi97PN5r6wA29HNm~-9oltenjdJj8sH6aWV1ZT7D1YypGfq5lF0PxNR2c6WxdBdfrJawF1WMiw7amSvyRbjC9QHMxnQndtLsdomwitkrugg7-osLQJFLtvJTVG1XhJrf-~GJyMAog30s8brs6TpYAWMcz7a0YR52YJcbsHYjlo77vRGOPqIbsQsOR5pW6nEsbipRKjSyNP3g40mX6v9fTBmuhNVnJ08aHNLxtHUQrI6DWcmnBMDHs9SGSRaZfgmqrpcDzrQGp8cB-YZ0j3BgWiPfh2M5URSjut7TMPgXMYFp5xU-biShvqrRJGfanQPZkoIHgTg__"
					/>
					<ImageCard
						imgRef={section4}
						containerClassName={`${
							isVisible4
								? "animate-fade-left animate-delay-[600ms]"
								: "opacity-0"
						}`}
						src="https://s3-alpha-sig.figma.com/img/07ec/1a8e/7c76a7120b15046dfc8da2d51ed9a862?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOJxXzdsFv85XuKxMO8g1IFRW3fFVrDKLbUgg72ZsuaTZ~1hAC3DDvCy7F8qoX-FQBIPWJ-wvh7cbdpgyGZM4jOzS-erHhT-Nv~jZdOteQvirHsN365qrvQtTrp1Coa-pDBVzdBhdF3JeKOgcxtJgApQZFknPg582fwii2UJr-a32qAfapl8eg64PfEwGVMXUjtGaYW4uUY-ERXWgbx40-tTliRqXcq8b2emgPX676TCv3a45UlXLfiSljd2t29xIPTad8PkjsDBANXCd6zDnBjGkAKze91dg9ItNXHvoKhxASyq7r-i9BXkm0ywsiss4epLR7KmCGlg2JYfvHcnvQ__"
					/>
					<div
						className={`col-span-2 flex flex-col gap-[3rem] justify-center ${
							isVisible5
								? "animate-fade-left animate-delay-[900ms]"
								: "opacity-0"
						}`}
						ref={section5}
					>
						<div className="flex flex-col gap-4">
							<h3 className=" text-body-1 font-bold">
								Join our ever-growing community of Swappers
								around the world!
							</h3>
							<p>
								Swapped operates in most countries. Planning to
								eat pizza in Manhattan, climb the Alps or enjoy
								the coast in Vietnam? Stop planning. Start
								living.
							</p>
						</div>
						<Button className="self-start" isSecondary>
							Explore homes
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-5 gap-[3rem]">
					<ImageCard
						imgRef={section6}
						containerClassName={` col-span-2 ${
							isVisible6
								? "animate-fade-right animate-delay-300"
								: "opacity-0"
						}`}
						src="https://s3-alpha-sig.figma.com/img/bf85/e7a7/d3c80eb1d2f53c9bc68797274552de62?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YybeMf1XAFIDopEksMiGVo3ooTmpBEWAeKHJ6RGS5aRNskybYf61reMmZASjX418Uk0S0wKkBkWs3tLpaGBO2Ak116k7DH-qfjIhAEUQFxOCWunRVQIixSC7C662B4DfvFGHawCsr7Vh9C9fB6bJSe2ScvIWh37CXR7jZg3BedwTGw6z~KyASotQJmvqBRV5plQcVIex0L8LJvRCHy9Ux31YNyscNi9~B64UwayDD4z7rJHuhIEnyoShXm2Mld3WHNv1YsUhz~Kgc5Jl9TnnWQw5EoCF9gu~ZJwyIps8Ibdo1Tnm8zOSS00RLCLKV66YqWmc9C0qOdVpz5fuZGen~g__"
					/>
					<ImageCard
						imgRef={section7}
						containerClassName={` col-span-3 ${
							isVisible7
								? "animate-fade-left animate-delay-300"
								: "opacity-0"
						}`}
						src="https://s3-alpha-sig.figma.com/img/90c5/83d2/90e800bd6f96d48c33a8edf272a3e8f2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WWqdvvQ9Thbe-sq309-G1hk6ELNP~l5POaq0nbseYQt~m5u3iJX5s~221fxDcNHB3NLx~JHLP2RQxA6aHASQpexqApwJrqUG~tWw~8RzWwL64zCODk8MqDBFkrwNN28Vt73eWIjxsvcOtN2RjoSwWQMxYFQ9UbiFz6qc8uzDzsIJbt6yOLpQMSdwcfduoEczDcYe7rXPSU5g2ClC4MnupgRMSCNt2vRDclphJg-orGa4KNaQtywS7bWjMKghNve5cq4arHN5WyacXQMIcFdCXnXMeKgz3bO~nim0uo07K5O4YmG-bNM6YzubbcAN9D7v1SQyzm1zAVHbf9ohZvkJvQ__"
					/>
				</div>
			</section>
			<PostCard />
		</div>
	);
};

export default LandingPage;
