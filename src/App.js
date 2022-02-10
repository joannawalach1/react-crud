import React from "react";
import Clients from "./pages/Clients";
import Orders from "./pages/Orders";
import AddClient from "./components/addClient";
import { AppBar, Toolbar, Typography, makeStyles } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";

import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1">
            <Link to="/orders">Orders</Link>
            <Link to="/clients">Clients</Link>
            <IconButton color="info" onClick={AddClient}>
              <AddIcon fontSize="medium"  />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
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
