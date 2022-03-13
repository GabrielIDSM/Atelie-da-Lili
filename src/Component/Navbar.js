import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="text-center Navbar">
                <div className="cover-container-navbar d-flex h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <nav className="nav nav-masthead justify-content-center">
                                <Link className={ this.props.active === "/" ? "nav-link active" : "nav-link" } to="/"><i className="fas fa-home"></i> Início </Link>
                                <Link className={ this.props.active === "/simule" ? "nav-link active" : "nav-link" } to="/simule"> Simule sua compra </Link>
                            </nav>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export { Navbar }