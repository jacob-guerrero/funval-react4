import React from "react";
import InfoTags from "./InfoTags";

export default function InfoTop({ profile }) {
  const { name, bio, avatar_url, followers, following, location } = profile;

  return (
    <>
      <div className="w-full max-w-3xl relative">
        <picture className="bg-gray-700 p-2 absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-xl lg:left-0 ">
          <img
            src={avatar_url}
            alt="profile avatar"
            className="w-20 rounded-md md:rounded-lg lg:w-26"
          />
        </picture>

        <div className="w-full text-white order-1 mt-12 text-center lg:hidden">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-gray-300">{bio}</p>
        </div>

        <ul className="w-full gap-2 mt-5 flex flex-wrap md:justify-center lg:mt-0 lg:ml-4 lg:gap-3">
          <InfoTags title={"Followers"} info={followers} />
          <InfoTags title={"Following"} info={following} />
          <InfoTags title={"Location"} info={location} />
        </ul>
      </div>

      <div className="w-full max-w-4xl text-white hidden lg:block">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-gray-300">{bio}</p>
      </div>
    </>
  );
}
