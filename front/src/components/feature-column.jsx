export default function FeatureColumn(props){
    const { key, title, description, src } = props;

    return (
    <div className="flex flex-col items-stretch w-3/12 max-md:w-full  max-md:ml-0">
      <div className="items-start self-stretch bg-zinc-100 flex w-full grow flex-col mx-auto p-6 rounded-lg max-md:mt-6 max-md:px-5">
        <img
          loading="lazy"
          src={src}
          className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full self-start"
          alt="Quiz Logo"
        />
        <header className="self-stretch text-gray-900 text-xl font-semibold leading-8 whitespace-nowrap mt-16 max-md:mt-10">
          {title}
        </header>
        <div className="self-stretch text-slate-600 text-base leading-6 mt-2">
          {description}
        </div>
        <div className="justify-between items-stretch self-stretch flex gap-2 mt-7 pr-3">
          <a href="#" className="text-black text-base font-semibold leading-6">
            View integration
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3912112b4bfe87cd90cf03e94bfa0ce88d3bcf51c073adb1be8823169ec55a?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt="Integration Logo"
          />
        </div>
      </div>
      </div>
    );
}