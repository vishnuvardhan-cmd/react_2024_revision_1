import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://www.bing.com/images/search?view=detailV2&ccid=GERREHrB&id=EE2C40EAE17E0C544D892F2596A75880567A7716&thid=OIP.GERREHrBCwKPYjt9HdfoVQHaEo&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f333770.jpg&exph=1600&expw=2560&q=money+images&simid=608039130788922727&FORM=IRPRST&ck=E40523333CE2C7C148BA742213C9C6DA&selectedIndex=6&itb=0)`,
      }}
    >
      <h1>Test For Tailwind</h1>
    </div>
  );
}

export default App;
