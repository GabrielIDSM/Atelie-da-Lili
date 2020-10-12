import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bar extends Component {
    render() {
        return (
            <nav className="Bar">
                <ul className="Bar_Navlinks">
                    <Link className="Bar_links" to="/">
                        <li><label className="Bar_label">Início</label></li>
                    </Link>
                    <Link className="Bar_links" to="/produtos">
                        <li><label className="Bar_label">Produtos</label></li>
                    </Link>
                    <Link className="Bar_links" to="/sobre">
                        <li><label className="Bar_label">Sobre</label></li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export { Bar };