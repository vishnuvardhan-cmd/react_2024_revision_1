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
        backgroundImage: `url(https://th.bing.com/th/id/R.35e4e4a47e524dd5a74415147de1742b?rik=r8kF1t1fZzIbOg&riu=http%3a%2f%2fpanamaadvisoryinternationalgroup.com%2fblog%2fwp-content%2fuploads%2f2015%2f04%2fmoney-06.jpg&ehk=3R6waOKAsAMonaG3j80CN%2bXsXHf%2b8t9oK6sCxe%2fwzws%3d&risl=1&pid=ImgRaw&r=0)`,
      }}
    >
    <h1>Test</h1>
    </div>
  );
}

export default App;
