import React from "react";
import Clients from "./pages/Clients";
import Orders from "./pages/Orders";

import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/orders">Orders</Link>
        <Link to="/clients">Clients</Link>
      </div>
      <div>
        <Routes>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
