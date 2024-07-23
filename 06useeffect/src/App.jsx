import { useState } from "react";
import "./App.css";
import ComponentLifeCyclec from "../components/ComponentLifeCyclec";

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div>
      {mounted && <ComponentLifeCyclec />}
      <button
        onClick={() => {
          setMounted((prev) => !prev);
        }}
      >
        Magic
      </button>
    </div>
  );
}

export default App;
