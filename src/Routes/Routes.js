import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Transacoes from "../Pages/Transacoes/Transacoes";
import Login from "../Pages/Login/Login";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/transacoes' exact component={Transacoes} />
                <Route path='/' exact component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;