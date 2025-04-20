export default function SearchInput({handleSubmit}) {
  
  return (
    <form
      className="flex p-2 bg-slate-700 gap-2 rounded-md focus-within:outline-2 focus-within:outline-indigo-700 md:rounded-lg"
      onSubmit={handleSubmit}
    >
      <img src="/icons/search.svg" alt="search" className="w-6" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Enter a github account..."
        className="w-full py-1 text-white focus:outline-none"
      />
    </form>
  );
}
