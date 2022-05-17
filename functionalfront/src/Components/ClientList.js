import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, useNavigate } from "react-router-dom";

const ClientList = () => {
    const [clientes, setClientes] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8080/clients/")
            .then((res) => {
                console.log(res);
                setClientes(res.data);
                console.log(setClientes);
            })
            .catch((err) => {
                console.error();
            });
    }, []);

    function remove(id_remove) {
        fetch(`http://localhost:8080/clients/${id_remove}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            document.location.reload(true);
        });
    }

    return (
        <>
            <div className="container">
                <ul className="list-group m-4">
                    {clientes.map((clientes) => (
                        <li key={clientes.id} className="list-group-item">
                            <div className="row">
                                <div className="col-sm-10 mt-2">
                                    {clientes.id} - {clientes.name} 
                                    {" "}
                                    Email: {clientes.email}
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary m-2"
                                        onClick={() => {
                                            navigate(`/editar`, {
                                                state:`${clientes.id}`
                                            });
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger m-2"
                                        onClick={() => remove(clientes.id)}
                                        >
                                        Deletar
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ClientList;
