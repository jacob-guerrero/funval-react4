import ProfileCard from "./ProfileCard";

function App() {
  return (
    <>
      <header className="w-full p-2 min-h-[50vh] bg-[url(/img/space.jpg)] bg-cover bg-center flex flex-col justify-center items-center md:min-h-[35vh]">
        <div className="w-full max-w-sm flex flex-col gap-4 md:gap-2">
          <div className="flex p-2 bg-slate-700 gap-2 rounded-md focus-within:outline-2 focus-within:outline-indigo-700 md:rounded-lg">
            <img src="/icons/search.svg" alt="search" className="w-6" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Enter a github account..."
              className="w-full py-1 text-white focus:outline-none"
            />
          </div>
          <ProfileCard />
        </div>
      </header>
    </>
  );
}

export default App;
