import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Link, Route, useNavigate } from "react-router-dom";

const AppNav = () => {
  let navigate = useNavigate();
  return (
    <>
      <nav class="navbar bg-dark">
        <form class="container-fluid justify-content-start gap-3 ms-4">
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={() => {
              navigate("clients");
            }}
          >
            Lista de Clientes
          </button>
        </form>
      </nav>
    </>
  );
};

export default AppNav;
