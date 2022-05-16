import React from 'react';

const ClientList = () => {
    const atividades = [
        {
            id: 1,
            descricao: "primeiro"
        },
        {
            id: 2,
            descricao: "segundo"
        }
    ];

    

    console.log("teste de importação");
    return (
        <>
            <div className="">
                <ul className="list-group m-4">
                    {atividades.map(ativ => (
                        <li key={ativ.id} className="list-group-item">
                            <div className="row">
                                <div className="col-sm-10 mt-2 ml-10">{ativ.id} - {ativ.descricao}</div>
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