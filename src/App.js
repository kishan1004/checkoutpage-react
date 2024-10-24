import "./App.css";
import "./index.css";
import Topbar from "./components/Topbar.js";
import Header from "./components/Header.js";
import Contactinfo from "./components/Contactinfo.js";
import Order from "./components/Order.js";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen w-full">
      <Topbar />
      <Header />
      <div className="md:flex">
        <Contactinfo />
        <Order />
      </div>
    </div>
  );
}

export default App;
