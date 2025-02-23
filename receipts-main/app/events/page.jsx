"use client";
import React, { useState } from "react";
import CreateEvent from "../Events/Create";
import ViewEvent from "../Events/View";

export default function HomePage() {
  const [view, setView] = useState("create");

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setView("create")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Event
        </button>
        <button onClick={() => setView("view")} className="bg-green-500 text-white px-4 py-2 rounded">
          View Event
        </button>
      </div>
      {view === "create" ? <CreateEvent /> : <ViewEvent />}
    </div>
  );
}