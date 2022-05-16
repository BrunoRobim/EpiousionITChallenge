import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientList from "./Components/ClientList";
import AppNav from "./Components/AppNavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <Router>
      <AppNav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="clients" element={<ClientList />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
