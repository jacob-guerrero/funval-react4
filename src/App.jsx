import { useEffect, useState } from "react";
import InfoTags from "./components/InfoTags";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import SearchInput from "./components/SearchInput";
import useData from "./hooks/useData";
import InfoTop from "./components/InfoTop";

function App() {
  const { response: data } = useData("https://api.github.com/users/github");
  const { response: dataRepos } = useData(
    "https://api.github.com/users/github/repos"
  );

  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setProfile(data);
    setRepos(dataRepos);
  }, [data, dataRepos]);

  return (
    <>
      <header className="w-full p-2 min-h-[50vh] bg-[url(/img/space.jpg)] bg-cover bg-center flex flex-col justify-center items-center md:min-h-[35vh]">
        <div className="w-full max-w-sm flex flex-col gap-4 md:gap-2">
          <SearchInput />
          {profile && <ProfileCard profile={profile} />}
        </div>
      </header>

      <main className="w-full p-2 min-h-[50vh] bg-gray-700 flex flex-col gap-4 items-center md:min-h-[65vh] relative md:gap-8">
        {profile && <InfoTop profile={profile} />}

        <div className="w-full max-w-4xl text-white grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-2 md:gap-5">
          {repos &&
            repos
              .slice(0, 4)
              .map((repo) => <RepoCard repo={repo} key={repo.id} />)}
        </div>

        <p className="text-white p-2 my-4">View all repositories</p>
      </main>
    </>
  );
}

export default App;
