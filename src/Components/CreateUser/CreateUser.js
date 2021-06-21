import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import "./CreateUser.scss";

function CreateUser() {
    return (
        <form className="form-field" action="/transacoes" method="GET">
            <input type="text" className="input-field" placeholder="Usuário" />
            <input type="text" className="input-field" placeholder="E-mail" />
            <input type="text" className="input-field" placeholder="Data de nascimento" />
            <input type="password" className="input-field" placeholder="Senha" />
            <input type="password" className="input-field" placeholder="Confirmar Senha" />
            <button className="form-btn"><FontAwesomeIcon icon={faSignInAlt} className="icone" />  Login</button>
        </form>
    );
}

export default CreateUser;