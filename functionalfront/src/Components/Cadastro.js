import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

    const [form, setForm] = useState({
        name: ' ',
        email: ' '
    })

    const formFields = [
        {
            id: 'name',
            label: 'Nome',
            type: 'text'
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email'
        }
    ]

    const [response, setResponse] = useState(null);
    let navigate = useNavigate();

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }


    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8080/clients", {
            method: "POST",
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
                        Cadastrado com sucesso. Você será redirecionado para a lista de clientes.
                    </div>
                }
            </div>
        </form>


    )
}

export default Cadastro