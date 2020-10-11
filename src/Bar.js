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
                    <div className="Bar_links">
                        <li><label className="Bar_label">Galeria</label>
                            <ul>
                                <Link to="/">
                                    <li><label className="Bar_link_label">Cabeções</label></li>
                                </Link>
                                <Link to="/">
                                    <li><label className="Bar_link_label">Sapatos</label></li>
                                </Link>
                                <Link to="/">
                                    <li><label className="Bar_link_label">Outros</label></li>
                                </Link>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
        );
    }
}

export { Bar };