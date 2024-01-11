import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { signedAtom } from "../index.js";

export default function GettingStarted() {
	const [signed, setSignedState] = useAtom(signedAtom);
	return (
		<div className="justify-between">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-24 mb-16 items-start max-md:my-10">
							<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
								Navigating Zewail City's Past for a Brighter Future!
							</div>
							<div className="self-stretch text-neutral-500 text-lg leading-8 mt-8 max-md:max-w-full">
								Crafting quiz experiences that are both distinctive and
								practical is the ideal formula for an engaging and enjoyable
								platform.
							</div>
							<Link to={signed? "/resources": "/signIn"} className="text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-8 px-8 py-4 max-md:px-5">
								Get Started!
							</Link>
						</div>
					</div>
				</div>{" "}
				<div className="flex flex-col items-stretch h-full w-6/12 max-md:w-full max-md:ml-0">
					<img
						loading="lazy"
						alt="Zewail City Image"
						srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
						className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full"
					/>
				</div>
			</div>
		</div>
	);
}
