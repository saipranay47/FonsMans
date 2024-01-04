import data from "./assets/data.json";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="relative overflow-hidden">
        <img
          src="orangePerson.jpeg"
          alt="orange person image"
          className="h-full w-full object-cover rounded-l-2xl max-lg:rounded-2xl"
        />
        <div className="absolute top-0 left-0 p-8 flex h-full w-full flex-col justify-between items-start">
          <img src="/mans.svg" alt="mans logo" className="h-6 " />

          <div className="font-light">
            <p className="text-lg">Hello, I'm Fons Mans.</p>
            <p className="opacity-50 max-w-[310px] ">
              I build my ideas, help others to shape theirs, and talk about
              everything design.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg lg:col-span-2 max-lg:justify-between font-light">
        <div className="p-8 pl-4 -mt-2 flex w-full max-md:justify-between flex-col sm:flex-row gap-2">
          <span className="lg:max-w-[300px] md:w-full max-sm:flex justify-between items-center">
            <p className="text-lg">Got a question?</p>
            <a href="#" className="opacity-50 ">
              Get in touch
            </a>
          </span>
          <span className="lg:max-w-xs md:w-full max-sm:flex justify-between items-center">
            <p className="text-lg">Stay in loop</p>
            <a href="#" className="opacity-50 ">
              Subscribe
            </a>
          </span>
          <span className="lg:max-w-xs md:w-full max-sm:flex justify-between items-center">
            <p className="text-lg">I'm on socials</p>
            <a href="#" className="opacity-50">
              Follow me on x.com
            </a>
          </span>
        </div>

        <div className="p-8 pl-4 md:mt-60 flex w-full max-lg:justify-center max-lg:items-start flex-wrap gap-y-20 gap-x-28 lg:gap-y-10">
          <div className="md:max-w-[200px] w-full">
            <div className="w-full md:max-w-[200px]">
              <p className="text-lg">Projects</p>
              {data.projects.map((project) => (
                <span className="flex justify-between w-full my-1">
                  <p className="">
                    <span className="opacity-50">{project.name}</span>
                    {project.new && (
                      <span class="whitespace-nowrap rounded-md bg-[#331908] px-[6px] leading-0 ml-2 py-[3px] text-xs font-normal text-orange-600">
                        new
                      </span>
                    )}
                  </p>
                  <p className="opacity-50">'{project.year}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="md:max-w-[210px] w-full lg:mb-10">
            <div className="w-full md:max-w-[210px]">
              <p className="text-lg">Stack</p>
              {data.stack.map((stack) => (
                <span className="opacity-50 flex justify-between w-full my-1">
                  <p className="">{stack}</p>
                  <p>Web design</p>
                </span>
              ))}
            </div>
          </div>
          <div className="md:max-w-[220px] w-full">
            <div className="w-full md:max-w-[220px]">
              <p className="text-lg">Channels</p>
              {data.channels.map((channel) => (
                <span className="opacity-50 flex justify-between w-full my-1">
                  <p className="">{channel.name}</p>
                  <p>{channel.type}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="md:max-w-[200px] w-full lg:-mt-14">
            <div className="w-full md:max-w-[220px]">
              <p className="text-lg">Features</p>
              {data.features.map((features) => (
                <span className="opacity-50 flex justify-between w-full my-1">
                  <p className="">{features.name}</p>
                  <p>'{features.year}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="md:max-w-[210px] w-full">
            <div className="w-full md:max-w-[220px]">
              <p className="text-lg">Clients</p>
              {data.clients.map((clients) => (
                <span className="opacity-50 flex justify-between w-full my-1">
                  <p className="">{clients.name}</p>
                  <p>{clients.type}</p>
                </span>
              ))}
            </div>
          </div>
        <button class="bg-orange-600 hover:bg-orange-700 text-black font-bold py-3 px-6 rounded-full lg:absolute right-10 bottom-20">
          Book a session
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
