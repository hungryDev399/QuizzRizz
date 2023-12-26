import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-black pr-[120px] pl-[120px]">
        <div className="max-md:max-w-full pt-[120px]  ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <header className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-8">
                <Link to="/" className="text-white text-2xl font-medium leading-8 whitespace-nowrap">QuizzRizz</Link>
                <div className="text-neutral-400 text-xs leading-5 mt-6">We manage lead logistices <br /> for worlds multinational <br /> companies.</div>
              </div>
            </header>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap">Company</div>
                <div className="text-neutral-400 text-sm leading-5 mt-6">
                  <a href="#">Home</a> <br />
                  <br />
                  <a href="#">Project</a> <br />
                  <br />
                  <a href="#">About Us</a> <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap">Contact</div>
                <div className="text-neutral-400 text-sm leading-5 mt-6">
                  <span>Plot 12578, Ahmed Zewail Road, October Gardens, 6th of October City, Giza, Egypt</span>
                  <br />
                  <br />
                  <span>(123) 456789000</span>
                  <br />
                  <br />
                  <span>info@QuizzRizz.io</span>{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-50 text-base font-medium leading-6 whitespace-nowrap">Social</div>
                <div className="text-neutral-400 text-sm leading-5 mt-6">
                  <a href="#">Instagram</a> <br />
                  <br />
                  <a href="#">LinkedIn</a> <br />
                  <br />
                  <a href="#">Youtube</a> <br />
                  <br />
                  <a href="#">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
            className="justify-between items-stretch border-t-[color:var(--Text-Light-2-Secondary,#4A4A4A)] flex gap-5 mt-16 py-8 border-t border-solid
             max-md:max-w-full max-md:flex-wrap "
        >       
            <div className="text-white text-sm leading-8 grow shrink basis-auto ml-8">
              ©2023 QuizzRizz. All rights reserved
            </div>
            <div className="text-neutral-400 text-right mr-8 text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
              <a href="#" className="footer-link">Privacy Policy</a> |{" "}
              <a href="#" className="footer-link">Terms & Conditions</a> |{" "}
              <a href="#" className="footer-link">Cookies Policy</a> |{" "}
              <a href="#" className="footer-link">Map</a>
            </div>
    </div>
    </div>
  );
}