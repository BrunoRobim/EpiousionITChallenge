import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientList from "./Components/ClientList";
import AppNav from "./Components/AppNavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import Cadastro from "./Components/Cadastro";
import Editar from "./Components/Editar";

const App = () => {
  return (
    <Router>
      <AppNav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="clients" element={<ClientList />}></Route>
        <Route path="cadastrar" element={<Cadastro />}></Route>
        <Route path="editar" element={<Editar />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
