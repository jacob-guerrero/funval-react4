import React from "react";

export default function ProfileCard({ profile }) {
  const { name, bio, avatar_url } = profile;

  return (
    <>
      <div className="w-full p-2 bg-slate-900 rounded-md text-white flex gap-3 items-center md:rounded-lg">
        <img
          src={avatar_url}
          alt="profile avatar"
          className="w-15 rounded-md md:rounded-lg"
        />
        <div className="flex flex-col">
          <h2 className="text-lg">{name}</h2>
          <p className="text-gray-300">{bio}</p>
        </div>
      </div>
    </>
  );
}
