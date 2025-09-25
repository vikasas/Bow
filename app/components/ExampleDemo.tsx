"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExampleDemo() {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const sampleQueries = [
    "Best cafe in Bangalore",
    "Train schedule Delhi to Mumbai",
    "Upcoming tech events",
    "Top hospitals near me",
  ] as const;
  type QueryType = (typeof sampleQueries)[number];

  const mockReplies: Record<QueryType, string> = {
    "Best cafe in Bangalore":
      "Here are some top-rated cafes in Bangalore: Third Wave Coffee, Matteo, and Blue Tokai",
    "Train schedule Delhi to Mumbai":
      "Next trains: Rajdhani Express (4:25 PM), Duronto Express (7:30 PM)",
    "Upcoming tech events":
      "Bangalore Tech Summit on Oct 20, Web3 Hackathon on Oct 25",
    "Top hospitals near me":
      "Apollo Hospitals, Fortis, and Manipal are top-rated nearby",
  };

  const handleTry = (q: QueryType) => {
    setQuery(q);
    setResponse(mockReplies[q]);
  };

  return (
    <div className="bg-gradient-to-br from-green-400 via-teal-600 to-green-500 
                 rounded-2xl shadow-2xl max-w-lg w-full p-8 
                 transform md:-rotate-6 md:hover:rotate-0 hover:shadow-3xl 
                 transition-all duration-300 ease-out">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Ask Bino Anything
      </h1>

      <div className="space-y-2 mb-6">
        <p className="text-white text-center">
          Try a sample query to see how Bino works:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {sampleQueries.map((q) => (
            <button
              key={q}
              onClick={() => handleTry(q)}
              className="px-4 py-2 bg-black text-white rounded-full text-sm hover:opacity-90 transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {query && (
        <div className="bg-gray-100 rounded-xl p-4 mb-4 shadow-inner">
          <p className="text-sm text-gray-500">You asked:</p>
          <p className="font-medium text-gray-800 mb-3">“{query}”</p>
          <p className="text-sm text-gray-500">Bino replied:</p>
          <p className="font-medium text-green-700">{response}</p>
        </div>
      )}
  <Link href={"https://bow.chat/register"}>
      <button
        disabled={!query}
        className={`w-full py-3 rounded-xl font-semibold transition ${
          query
            ? "bg-black text-white hover:opacity-90"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Try on WhatsApp
      </button>
      </Link>
    </div>
      
  );
}
