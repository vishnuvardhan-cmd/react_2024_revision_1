import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colorChanger = (color) => {
    setColor(color);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="bg-red-500 px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => colorChanger("red")}
          >
            RED
          </button>
          <button
            className="bg-orange-500 px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => colorChanger("orange")}
          >
            ORANGE
          </button>
          <button
            className="bg-yellow-500 px-4 py-1 rounded-full shadow-lg text-black"
            onClick={() => colorChanger("yellow")}
          >
            YELLOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
