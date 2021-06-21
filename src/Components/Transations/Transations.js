import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Transations.scss";


function Transations() {
    return (
        <div className="transations">
            <h2>Transações</h2>
            <div className="tabela-campo">
            <table className="tabela-transacoes">
                <thead>
                    <th></th>
                    <th className="valor">Valor</th>
                    <th className="descricao">Descrição</th>
                    <th className="data">Data</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr className="mais">
                        <td><FontAwesomeIcon icon={faPlus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                    <tr className="menos">
                        <td><FontAwesomeIcon icon={faMinus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                    <tr className="mais">
                        <td><FontAwesomeIcon icon={faPlus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                    <tr className="menos">
                        <td><FontAwesomeIcon icon={faMinus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                    <tr className="mais">
                        <td><FontAwesomeIcon icon={faPlus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                    <tr className="menos">
                        <td><FontAwesomeIcon icon={faMinus} className="icone" /></td>
                        <td className="valor">R$ 200,00</td>
                        <td className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tempus lacus in dictum.</td>
                        <td className="data">22/02/2020</td>
                        <td><button className="ver"><FontAwesomeIcon icon={faEye} className="icone" /></button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <div className="paginacao">
                <button className="pagina ativo">1</button>
                <button className="pagina">2</button>
                <button className="pagina">3</button>
                <button className="pagina">4</button>
                <button className="pagina">5</button>
            </div>
        </div>
    );
}

export default Transations;