import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("hello");

  const passwordRef=useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()-_=+{}[]|";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);

  const copyToClipBoard=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charAllowed]);

  return (
    <div className="w-full h-screen rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
      <div className="max-w-fit mx-auto bg-gray-400 p-8 rounded-3xl">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipBoard}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="Length" className="text-sky-600 font-bold">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numbersAllowed}
              className="cursor-pointer"
              onChange={() => setNumbersAllowed((prev) => !prev)}
            />
            <label htmlFor="Length" className="text-sky-600 font-bold">
              isNumbersAllowed
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              className="cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="Length" className="text-sky-600 font-bold">
              isCharactersAllowed
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
