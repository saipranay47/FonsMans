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
            <p className="opacity-50 max-w-[300px] ">
              I build my ideas, help others to shape theirs, and talk about
              everything design.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg lg:col-span-2 max-lg:justify-between font-light">
        <div className="p-8 pl-4 -mt-2 flex w-full max-md:justify-between">
          <span className="lg:max-w-xs md:w-full">
            <p className="text-lg">Got a question?</p>
            <p className="opacity-50 leading-3">Get in touch</p>
          </span>
          <span className="lg:max-w-xs md:w-full">
            <p className="text-lg">Stay in loop</p>
            <p className="opacity-50 leading-3">Subscribe</p>
          </span>
          <span className="lg:max-w-xs md:w-full">
            <p className="text-lg">I'm on socials</p>
            <p className="opacity-50 leading-3">Follow me on x.com</p>
          </span>
        </div>

        <div className="p-8 pl-4 mt-60 flex w-full max-lg:justify-between max-md:flex-wrap">
          <div className="max-w-[300px] w-full">
            <div className="w-full max-w-[200px]">
              <p className="text-lg">Projects</p>
              <span className="opacity-50 flex justify-between w-full">
                <p className="">10x Designers</p>
                <p>'22</p>
              </span>
            </div>
          </div>
          <div className="max-w-[300px] w-full">
            <div className="w-full max-w-[200px]">
              <p className="text-lg">Projects</p>
              <span className="opacity-50 flex justify-between w-full">
                <p className="">10x Designers</p>
                <p>'22</p>
              </span>
            </div>
          </div>
          <div className="max-w-[300px] w-full">
            <div className="w-full max-w-[200px]">
              <p className="text-lg">Projects</p>
              <span className="opacity-50 flex justify-between w-full">
                <p className="">10x Designers</p>
                <p>'22</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
