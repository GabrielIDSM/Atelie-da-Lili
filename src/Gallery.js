import React, { Component } from 'react';
import { Bar } from './Bar';
import { Link } from 'react-router-dom';

class Gallery extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <div className="Gallery_Component">
                    <h1>Mascotes e Kits</h1>
                    <h2>Nossa linha de bonecos faz a alegria de adultos e crianças por onde chega. Isso porque projetamos seus rostinhos para terem traços delicados e harmonioso,  de tão lindos é difícil não acreditar que não  são crianças de verdade.</h2>
                    <h2>Cada kit contém: <b>1 cabeça, 1 par de sapatos decorados e 1 sacola brinde.</b></h2>
                    <Link to="/1">
                        <label>Fotos →</label>
                    </Link>
                </div>
                <div className="Gallery_Component">
                    <h1>Mascotes de Vestir</h1>
                    <h2>O lúdico se comunica com adultos e crianças. Pensando nisso, criamos esta linha de materiais.</h2>
                    <h2>Estes materiais foram projetados para humanizar objetos e aproximar o público da mensagem que se deseja passar.</h2>
                    <Link to="/2">
                        <label>Fotos →</label>
                    </Link>
                </div>
                <div className="Gallery_Component">
                    <h1>Linha mini Ajudante</h1>
                    <h2>Pensando neles o tempo todo, fomos os pioneiros em criar mini mascotes pra turminha que queria ajudar também.</h2>
                    <h2>Com tamanhos e aberturas especiais para facilitar o uso, temos todos os modelos disponíveis em tamanho baby e até sob medida se for o caso!</h2>
                    <Link to="/3">
                        <label>Fotos →</label>
                    </Link>
                </div>
            </div>
        );
    }
}

export { Gallery };