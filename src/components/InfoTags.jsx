import React from "react";

export default function InfoTags({ title, info }) {
  return (
    <li className="min-w-max py-2 bg-slate-900 rounded-xl flex divide-x divide-slate-400">
      <p className="text-gray-400 px-5 py-1">{title}</p>
      <p className="text-white px-5 py-1">{info}</p>
    </li>
  );
}
