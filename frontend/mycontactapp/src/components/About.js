import React from 'react';

export const About = () => {
    return (
        <>
            <div style={{ width: "width: 90%" }}>
                <h2>Primera Práctica</h2>
                <h3>Laboratorio Análisis y Diseño de Sistemas 1</h3>
                <h4>Grupo 1</h4>
                <br />
                <div className="row" style={{padding: "10px"}}>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Juan Pablo Renato Montúfar Chávez </h5>
                                <p className="card-text">200413657</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Byron Estuardo Caal Catún </h5>
                                <p className="card-text">201901907</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: "10px"}}>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Lecxter Santos Alexsander Santiago Barrios</h5>
                                <p className="card-text">201213505</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vania Argueta Rodríguez</h5>
                                <p className="card-text">201213487</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}