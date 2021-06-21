import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import AddTransation from "../../Components/AddTransation/AddTransation";
import Transations from "../../Components/Transations/Transations";

function Transacoes() {
    return (
        <main>
            <Navbar />
            <div className="content">
                <AddTransation />
                <Transations />
            </div>
        </main>
    );
}

export default Transacoes;