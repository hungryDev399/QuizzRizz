import FeatureColumn from "./feature-column"

export default function FeatureSelection(){
    const columns_data = [
        {
            index:1,
            title: "Challenging Quizzes",
            description: "Explore a world of knowledge and fun with our diverse quizzes! Challenge yourself and learn something new in every click.",
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c7e4a7f4bd7355807fe0948b058344e82c31ff7bc2a4c956eccf3789e3046c7?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
        },
        {
            index:2,
            title: "ZC Past Exams",
            description: "Explore our Past Exams section for a wealth of knowledge and insights, revisiting previous quizzes to enhance your preparation.",
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/117cab310f9d21da55aef84340878d2cd426296385c172eb8180a15e010519d4?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
        },
        {
            index:3,
            title: "Study Materials",
            description: "Explore curated study materials designed to boost your knowledge. Dive into engaging content and ace your exams with confidence!",
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8e23693b36fcc4fbb432498df8ca88a00b8cd9cd2f4977cec5b39aa149f6a?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
        },
        {
            index:4,
            title: "Recorded Lectures",
            description: "Explore our Recorded Lectures for in-depth insights and knowledge. Engage in dynamic learning experiences at your own pace.",
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e01af18500fa7eb77145a337b6d69359d5f7d612927ba043a4161e24e3cc46e?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
        }
    ]
    return(
        <div className="items-center bg-white flex flex-col justify-center px-16 py-12 max-md:px-5">
        <header className="text-black text-xl font-bold leading-7 whitespace-nowrap self-start max-md:max-w-full">
          Features
        </header>
        <h1 className="text-zinc-900 text-4xl font-medium leading-[60px] w-[768px] max-w-full mt-3 self-start">
          powerful tools to grow smarter
        </h1>
        <p className="text-neutral-500 text-xl leading-9 w-[768px] max-w-full mt-5 self-start">
          Empower your quiz experience with robust, user-friendly analytics for enhanced engagement and retention. our platform offers powerful insights to help you convert and captivate your audience.
        </p>
        <div className="flex w-full max-w-[1200px] flex-col my-12 max-md:max-w-full max-md:my-10">
          <div className="self-stretch mt-8 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
            {
                columns_data.map((item) => {
                    return <FeatureColumn key={item.index} title={item.title} description={item.description} src={item.src}/>
                })
            } 
            </div>
          </div>
        </div>

      </div>
    )
}