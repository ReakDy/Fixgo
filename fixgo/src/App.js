import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import RequestRepair from "./pages/RequestRepair";
import RepairerDashboard from "./pages/RepairerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/tracking" element={<Tracking />} />

        <Route path="/request" element={<RequestRepair />} />

        <Route path="/repairer" element={<RepairerDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;