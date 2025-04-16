import React from "react";

export default function ProfileCard() {
  return (
    <div className="w-full p-2 bg-slate-900 rounded-md text-white flex gap-3 items-center">
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="profile avatar"
        className="w-15 rounded-md"
      />
      <div className="flex flex-col">
        <h2 className="text-lg">Github</h2>
        <p className="text-gray-300">How people build software</p>
      </div>
    </div>
  );
}
