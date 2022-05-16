import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ClientList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/clients/')
            .then(res => {
                console.log(res)
                setClientes(res.data)
            })
            .catch(err => {
                console.error();
            })
    }, []);

    console.log("teste de importação");
    return (
        <>
            <div className="">
                <ul className="list-group m-4">
                    {clientes.map(clientes => (
                        <li key={clientes.id} className="list-group-item">
                            <div className="row">
                                <div className="col-sm-10 mt-2 ml-10">{clientes.id} - {clientes.name}</div>
                                <div className="col-sm-2 mr-2">
                                    <button type="button" className="btn btn-primary m-2">Primary</button>
                                    <button type="button" className="btn btn-danger m-2">Danger</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
}

export default ClientList;