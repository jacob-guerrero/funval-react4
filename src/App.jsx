import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import SearchInput from "./components/SearchInput";
import useData from "./hooks/useData";
import InfoTop from "./components/InfoTop";

function App() {
  const [search, setSearch] = useState("github");
  const {
    response: data,
    loading,
    error,
  } = useData(`https://api.github.com/users/${search}`);
  const { response: dataRepos } = useData(
    `https://api.github.com/users/${search}/repos`
  );

  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchInput = formData.get("search").trim();
    if (searchInput) {
      setSearch(searchInput);
    }
  };
  console.log(profile)

  useEffect(() => {
    setProfile(data);
    setRepos(dataRepos);
  }, [data, dataRepos]);

  return (
    <>
      <header className="w-full p-2 min-h-[50vh] bg-[url(/img/space.jpg)] bg-cover bg-center flex flex-col justify-center items-center md:min-h-[35vh]">
        <div className="w-full max-w-sm flex flex-col gap-4 md:gap-2">
          <SearchInput handleSubmit={handleSubmit} />
          {!loading && !error && profile && <ProfileCard profile={profile} />}
        </div>
      </header>

      <main className="w-full p-2 min-h-[50vh] bg-gray-700 flex flex-col gap-4 items-center md:min-h-[65vh] relative md:gap-8">
        {loading ? "" : error ? "" : profile && <InfoTop profile={profile} />}

        <div className="w-full max-w-4xl text-white grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-2 md:gap-5">
          {loading ? (
            <div className="w-full h-full flex justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div className="w-full flex justify-center items-center">
              <p>User not found</p>
            </div>
          ) : (
            repos &&
            repos
              .slice(0, 4)
              .map((repo) => <RepoCard repo={repo} key={repo.id} />)
          )}
        </div>

        {loading
          ? ""
          : error
          ? ""
          : repos && (
              <p className="text-white p-2 my-4">View all repositories</p>
            )}
      </main>
    </>
  );
}

export default App;
