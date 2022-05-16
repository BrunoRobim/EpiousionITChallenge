import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Cadastro = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:8080")
            .then((res) => {
                console.log(res);
                setDados(res.data);
            })
            .catch((err) => {
                console.error();
            });
    }, []);
    return (
        <>
            <div className='container mt-4'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

        </>
    )
}

export default Cadastro