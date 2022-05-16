import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link, Route, useNavigate } from "react-router-dom";

const AppNav = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container">

          <form className="container-fluid justify-content-start">
            <button
              className="btn btn-outline-success me-2"
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </button>
            <button
              className="btn btn-outline-success me-2"
              type="button"
              onClick={() => {
                navigate("clients");
              }}
            >
              Lista de Clientes
            </button>
            <button type="button" className="btn btn-outline-success me-2" onClick={() => {
              navigate("cadastrar");
            }}>Cadastrar</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default AppNav;
