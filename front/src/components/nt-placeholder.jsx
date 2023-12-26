export default function NtPlaceHolder({content}){
    return (
        <header className="items-center bg-black flex flex-col justify-center px-16 py-11 max-md:px-5">
          <section className="items-center flex w-full max-w-[1216px] flex-col justify-center my-12 px-16 max-md:max-w-full max-md:my-10 max-md:px-5">
            <div className="flex w-[768px] max-w-full flex-col items-center">
              <div className="self-stretch m-10 text-white text-center text-5xl font-semibold leading-10 tracking-tighter max-md:max-w-full">
                <h1>{content}</h1>
              </div>
              <div className="items-stretch flex gap-4 mt-10  max-md:max-w-full max-md:flex-wrap"></div>
            </div>
          </section>
        </header>
      );
}