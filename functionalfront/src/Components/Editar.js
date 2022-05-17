import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Editar = () => {
    const [clientes, setClientes] = useState([]);
    let navigate = useNavigate();

    const { state } = useLocation();
    let id = { state };

    const [form, setForm] = useState({
        name: ' ',
        email: ' '
    })

    const formFields = [
        {
            id: 'name',
            label: 'Novo Nome',
            type: 'text'
        },
        {
            id: 'email',
            label: 'Novo Email',
            type: 'email'
        }
    ]

    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/clients/${state}`)
            .then((res) => {
                console.log(res);
                setClientes(res.data);
            })
            .catch((err) => {
                console.error();
            });
    }, []);

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:8080/clients/${state}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then(response => {
            setResponse(response);
            setTimeout(() => {
                navigate("/clients")
            }, 2200)
        });
    }

    return (
        <>
            <div className="container">
                <ul className="list-group m-4">
                    <li key={clientes.id} className="list-group-item">
                        <div className="row">
                            <div className="col-sm-10 m-2">
                                <div>Dados do Cliente:</div>
                                <div>id:{clientes.id}</div>
                                <div>nome:{clientes.name}</div>
                                <div>Email: {clientes.email}</div>
                            </div>
                        </div>
                    </li>
                    <form onSubmit={handleSubmit}>
                        <div className='container mt-4'>
                            {formFields.map(({ id, label, type }) => (
                                <div className="mb-3" key={id}>
                                    <label className="form-label" htmlFor={id}>{label}</label>
                                    <input
                                        id={id}
                                        type={type}
                                        value={form[id]}
                                        onChange={handleChange}
                                        className="form-control">
                                    </input>
                                </div>
                            ))}
                            <button
                                className="btn btn-primary">
                                Enviar
                            </button>
                            {response && response.ok &&
                                <div className="mt-2 alert alert-primary" role="alert">
                                    Alterado com sucesso. Você será redirecionado para a lista de clientes.
                                </div>
                            }
                        </div>
                    </form>
                </ul>
            </div>
        </>
    );
}

export default Editar