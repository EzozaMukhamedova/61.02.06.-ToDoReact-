import React from "react";

export default function Button({title}) {
  return (
    <button className="py-3 px-2 text-2xl text-blue-300 rounded-2xl bg-amber-50">
      {title}
    </button>
  );
}
