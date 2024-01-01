import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <div>
      <nav className="w-full bg-[#0E121E] flex py-3">
        <div className="w-[64%] mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-green-800 font-extrabold text-lg underline uppercase"><img src="../logo.png" width={100} height={30}/></NavLink>
          <div className="flex gap-4">
            <NavLink to="/" className="text-white hover:underline text-sm">Home</NavLink>
            <NavLink to="/cart"><img src="../android-chrome-192x192.png" width={25} height={25} /></NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
