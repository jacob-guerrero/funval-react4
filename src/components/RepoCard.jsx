import React from "react";

export default function RepoCard() {
  return (
    <div className="p-4 rounded-xl flex flex-col gap-4 bg-gradient-to-r from-slate-900 to-indigo-950 md:p-6">
      <h3 className="font-bold text-xl">.github</h3>
      <p className="text-gray-300">
        Community health flies for the @GitHub organization
      </p>
      <div className="flex gap-x-4 flex-wrap">
        <div className="flex gap-x-2 flex-wrap">
          <div className="flex gap-1 items-center">
            <img src="/icons/license.svg" alt="license" />
            <p>MIT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/icons/fork.svg" alt="forks" />
            <p>2,369</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/icons/star.svg" alt="stars" />
            <p>703</p>
          </div>
        </div>

        <p>updated 4 days ago</p>
      </div>
    </div>
  );
}
