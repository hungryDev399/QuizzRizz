import React from "react";

export default function OurStory() {
	return (
		<div className="justify-end self-stretch rounded-3xl">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<header className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className=" self-stretch border-r-[color:var(--Text-Light-5-Disable,#D1D1D1)] bg-black flex grow flex-col w-full px-20 py-6 border-r border-solid max-md:max-w-full max-md:px-5">
						<h1 className="text-white text-left text-xl font-bold leading-7 max-w-[516px] mt-16 max-md:max-w-full max-md:mt-10">
							About us
						</h1>
						<div className="text-zinc-50 text-5xl font-medium leading-[60px] whitespace-nowrap mt-11 mb-64  max-md:max-w-full max-md:mb-10">
							Our Story
						</div>
					</div>
				</header>
				<section className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="items-center self-stretch flex grow flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-16 mb-12 items-start max-md:my-10">
							<h2 className="text-zinc-900 text-left text-2xl font-medium leading-8 self-stretch max-md:max-w-full">
								Get to Know Us
							</h2>
							<div className="self-stretch text-neutral-500 text-xl leading-9 mt-8 max-md:max-w-full">
								QuizzRizz is an educational webapp designed specifically for
								Zewail City students to help them by offering an organized and
								easy way to access past ZC materials and individual
								self-assessment to enhance students’ learning experience in the
								city.
							</div>
							<button className="text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-8 px-8 py-4 max-md:px-5">
								Read More
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
