import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import "./LoginForm.scss";

function LoginForm() {
    return (
        <form className="form-field" action="/transacoes" method="GET">
            <input type="text" className="input-field" placeholder="Usuário" />
            <input type="password" className="input-field" placeholder="Senha" />
            <button className="form-btn"><FontAwesomeIcon icon={faSignInAlt} className="icone" />  Login</button>
        </form>
    );
}

export default LoginForm;