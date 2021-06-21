import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import LoginForm from "../LoginForm/LoginForm";
import CreateUser from "../CreateUser/CreateUser";

import "./LoginField.scss";

function LoginField() {
    const [ isLogin, setIsLogin ] = useState(true);

    return (
        <section className="login-field">
            <h1><FontAwesomeIcon icon={faHome} className="icone" /> Bem vindo!</h1>
            <p>Faça login para entrar no sistema de transações.</p>
            { isLogin ? <LoginForm/> : <CreateUser/> }
            <button className="toogle-form" onClick={e => setIsLogin(!isLogin)}>{ isLogin ? "Criar usuário" : "Fazer Login" }</button>
        </section>
    );
}

export default LoginField;