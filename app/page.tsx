// pages/index.js
"use client";
import React, { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import GameMap from "./components/GameMap";
import Character from "./components/Character";
import rooms from "./components/rooms"; // Adjust the import path as necessary

const Home = () => {
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [map, setMap] = useState([]);
  const [mapStyle, setMapStyle] = useState({});

  const tileSize = 256;

  const generateMap = () => {
    // Select a random room configuration
    const roomKeys = Object.keys(rooms);
    const randomRoomKey = roomKeys[Math.floor(Math.random() * roomKeys.length)];
    const selectedRoom = rooms[randomRoomKey].grid;

    setMap(selectedRoom); // Set the map to the selected room's grid
  };
  React.useEffect(() => {
    generateMap();
  }, []);

  const handleKeyPress = (key) => {
    // Regardless of the key pressed, generate a new map (new room)
    generateMap();
  };

  useHotkeys("a, d, w, s", handleKeyPress);

  useHotkeys("a", () => handleKeyPress("a"));
  useHotkeys("d", () => handleKeyPress("d"));
  useHotkeys("w", () => handleKeyPress("w"));
  useHotkeys("s", () => handleKeyPress("s"));

  const [userInput, setUserInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendInput = async () => {
    try {
      const response = await fetch("/api/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),
      });

      if (response.ok) {
        const data = await response.json();
        setApiResponse(data.output);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setUserInput(""); // Clear the input field
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendInput();
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="relative" style={mapStyle}>
          <GameMap map={map} tileSize={tileSize} />
          <Character tileSize={tileSize} />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            placeholder="Type your input here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendInput}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <p className="text-lg">{apiResponse}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
