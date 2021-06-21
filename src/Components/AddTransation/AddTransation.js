import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faDollarSign, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import "./AddTransation.scss";


function AddTransation() {
    return (
        <form className="add-transation">
            <h2>Nova Transação</h2>
            <div className="sup">
                <div className="campo">
                    <p className="pagar">
                        <FontAwesomeIcon icon={faArrowDown} className="icone" /> Pagar
                    </p>
                    <label className="switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                    <p className="receber">
                        <FontAwesomeIcon icon={faArrowUp} className="icone" /> Receber
                    </p>
                </div>
                <div className="money campo-texto">
                    <div className="campo-icone">
                        <FontAwesomeIcon icon={faDollarSign} className="icone" />
                    </div>
                    <input type="number" min="0" placeholder="R$ 0,00" className="input-form" />
                </div>
                <div className="date campo-texto">
                    <div className="campo-icone">
                        <FontAwesomeIcon icon={faCalendarAlt} className="icone" />
                    </div>
                    <input type="text" placeholder="Dia da Transação" className="input-form" />
                </div>
            </div>
            <div className="sub">
                <textarea className="input-form" placeholder="Descrição"></textarea>
                <button className="nova">Adicionar Transação</button>
            </div>
        </form>
    );
}

export default AddTransation;