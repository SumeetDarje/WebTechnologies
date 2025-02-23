"use client";
import React, { useEffect, useState } from "react";


type EventType = {
  eventId: number;
  type: "seminar" | "workshop" | "other";
  name: string;
  desc?: string;
  items: { name: string; description: string; price: number }[];
};

export default function ViewEvent() {
  const [eventData, setEventData] = useState<EventType | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("eventData");
    if (storedData) {
      setEventData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold mb-4">View Event</h1>
      {eventData ? (
        <div className="border p-4">
          <p><strong>Event ID:</strong> {eventData.eventId}</p>
          <p><strong>Type:</strong> {eventData.type}</p>
          <p><strong>Name:</strong> {eventData.name}</p>
          <p><strong>Description:</strong> {eventData.desc || "No description provided"}</p>
          <h2 className="text-xl font-semibold mt-4">Items:</h2>
          {eventData.items.map((item, index) => (
            <div key={index} className="border p-2 mt-2">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Price:</strong> Rs.{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No event data found. Please submit an event.</p>
      )}
    </div>
  );
}

