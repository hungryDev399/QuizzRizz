
import React from "react";

export default function ContactForm() {
    return (
		<div className="justify-between">
	    <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
            <form className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <header className="text-zinc-900 text-3xl font-medium leading-10 whitespace-nowrap max-md:max-w-full">
                Contact us
              </header>
              <div className="text-neutral-500 text-lg leading-6 whitespace-nowrap mt-3 max-md:max-w-full">
                Our friendly team would love to hear from you.
              </div>
              <div className="items-stretch flex justify-between gap-3 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <label htmlFor="firstName" className="text-zinc-900 text-sm font-medium leading-5">
                    First name
                  </label>
                  <input
                    id="firstName"
                    className="text-neutral-500 text-base leading-6 whitespace-nowrap items-stretch rounded border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 border-solid"
                    type="text"
                    aria-label="First name"
                    aria-role="textbox"
                  />
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <label htmlFor="lastName" className="text-zinc-900 text-sm font-medium leading-5">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    className="text-neutral-500 text-base leading-6 whitespace-nowrap items-stretch rounded border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 border-solid"
                    type="text"
                    aria-label="Last name"
                    aria-role="textbox"
                  />
                </div>
              </div>
              <label htmlFor="email" className="text-zinc-900 text-sm font-medium leading-5 mt-6 max-md:max-w-full">
                Email
              </label>
              <input
                className="text-neutral-500 text-base leading-6 whitespace-nowrap items-stretch rounded border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 border-solid max-md:max-w-full"
                id="email"
                type="email"
                placeholder="you@company.com"
                aria-label="Email"
                aria-role="textbox"
              />
              <label htmlFor="message" className="text-zinc-900 text-sm font-medium leading-5 mt-6 max-md:max-w-full">
                Message
              </label>
              <textarea
                className="text-neutral-500 text-base leading-6 whitespace-nowrap items-stretch rounded border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-3 border-solid max-md:max-w-full"
                id="message"
                placeholder="Leave us a message..."
                aria-label="Message"
                aria-role="textbox"
              />
              <button
                className="text-white text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-center rounded bg-black mt-10 px-16 py-6 max-md:max-w-full max-md:px-5"
                type="submit"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col border overflow-hidden items-stretch h-[750px] w-[750px]  ml-5 max-md:ml-0">
          <iframe className="w-[100%] h-[100%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.6406947946093!2d31.065262858900724!3d29.93872487786873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145851cf7032bfa3%3A0xcf9464e129087d10!2sZewail%20City%20For%20Science%20And%20Technology!5e0!3m2!1sen!2seg!4v1703472273475!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Zewail City map"></iframe>
        </div>
      </div>
    </div>


    );
  }