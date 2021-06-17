import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMoneyBillAlt, faSignOutAlt, faHome, faBars } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.scss";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <nav className={showMenu ? "active" : ""}>
            <h3>
                <FontAwesomeIcon icon={faUser} className="icone" />
                Renan Lima
            </h3>

            <ul className="navigation">
                <li className="nav-item">
                    <a href="#" className="nav-link active">
                        <FontAwesomeIcon icon={faHome} className="icone" />
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <FontAwesomeIcon icon={faMoneyBillAlt} className="icone" />
                        Transacoes
                    </a>
                </li>
            </ul>

            <button className="logout">
                <FontAwesomeIcon icon={faSignOutAlt} className="icone" />
                Log Out
            </button>
        </nav>
        <button className="toogle-menu" onClick={e => setShowMenu(!showMenu)}><FontAwesomeIcon icon={faBars} className="icone" /></button>
        </>
    );
}

export default Navbar;