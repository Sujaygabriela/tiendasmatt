import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/Admin/Login";
import AdminPanel from "./pages/Admin/Panel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
