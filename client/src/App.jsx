import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;