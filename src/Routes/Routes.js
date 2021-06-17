import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Transacoes from "../Pages/Transacoes/Transacoes";
import Login from "../Pages/Login/Login";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/transacoes' exact component={Transacoes} />
                <Route path='/login' exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;