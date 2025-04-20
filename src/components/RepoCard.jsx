import React from "react";
import timeSince from "../utils/timeSince";

export default function RepoCard({ repo }) {
  const {
    name,
    description,
    license,
    forks,
    stargazers_count,
    updated_at,
    html_url,
  } = repo;

  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="max-h-max p-4 rounded-xl flex flex-col gap-4 bg-gradient-to-r from-slate-900 to-indigo-950 md:p-6"
    >
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="flex gap-x-4 flex-wrap">
        <div className="flex gap-x-2 flex-wrap">
          {license && (
            <div className="flex gap-1 items-center">
              <img src="/icons/license.svg" alt="license" />
              <p>{license.spdx_id}</p>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <img src="/icons/fork.svg" alt="forks" />
            <p>{forks}</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="/icons/star.svg" alt="stars" />
            <p>{stargazers_count}</p>
          </div>
        </div>

        <p>updated {timeSince(updated_at)} ago</p>
      </div>
    </a>
  );
}
