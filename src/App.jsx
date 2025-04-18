import InfoTags from "./components/InfoTags";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <>
      <header className="w-full p-2 min-h-[50vh] bg-[url(/img/space.jpg)] bg-cover bg-center flex flex-col justify-center items-center md:min-h-[35vh]">
        <div className="w-full max-w-sm flex flex-col gap-4 md:gap-2">
          <SearchInput />
          <ProfileCard />
        </div>
      </header>

      <main className="w-full p-2 min-h-[50vh] bg-gray-700 flex flex-col gap-4 items-center md:min-h-[65vh] relative md:gap-8">
        <div className="w-full max-w-3xl relative">
          <picture className="bg-gray-700 p-2 absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-xl lg:left-0 ">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="profile avatar"
              className="w-20 rounded-md md:rounded-lg lg:w-26"
            />
          </picture>

          <div className="w-full text-white order-1 mt-12 text-center lg:hidden">
            <h2 className="text-3xl font-semibold">Github</h2>
            <p className="text-gray-300">How people build software</p>
          </div>

          <ul className="w-full gap-2 mt-5 flex flex-wrap md:justify-center lg:mt-0 lg:ml-4 lg:gap-3">
            <InfoTags title={"Followers"} info={27839} />
            <InfoTags title={"Following"} info={0} />
            <InfoTags title={"Location"} info={"San Francisco, CA"} />
          </ul>
        </div>

        <div className="w-full max-w-4xl text-white hidden lg:block">
          <h2 className="text-3xl font-semibold">Github</h2>
          <p className="text-gray-300">How people build software</p>
        </div>

        <div className="w-full max-w-4xl text-white grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-2 md:gap-5">
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </div>

        <p className="text-white p-2 my-4">View all repositories</p>
      </main>
    </>
  );
}

export default App;
