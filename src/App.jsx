import InfoTags from "./components/InfoTags";
import ProfileCard from "./components/ProfileCard";
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

      <main className="w-full p-2 min-h-[50vh] bg-gray-700 flex flex-col items-center md:min-h-[65vh] relative">
        <div className="w-full max-w-3xl relative">
          <picture className="bg-gray-700 p-2 absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-xl lg:left-0 ">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="profile avatar"
              className="w-20 rounded-md md:rounded-lg lg:w-26"
            />
          </picture>

          <ul className="w-full gap-2 mt-15 flex flex-wrap md:justify-center lg:mt-0 lg:ml-4 lg:gap-3">
            <InfoTags title={"Followers"} info={27839} />
            <InfoTags title={"Following"} info={0} />
            <InfoTags title={"Location"} info={"San Francisco, CA"} />
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
