import React, { Component } from 'react';
import { Frete } from './Frete';
import { Bar } from './Bar';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <img className="Home_Image" src={require('./images/ProjectSClouds.png')} alt="logo"></img>
                <div className="Home_Component">
                    <h1>Olá, Este é o Ateliê Lili Inácio!</h1>
                    <h2>Bem-vindo a este espaço que é nosso e foi projetado com muito carinho pra você! Aqui você poderá escolher e sonhar com o seu mascote. E de sonhos eu entendo, pois o ateliê nasceu de um sonho!</h2>
                </div>
                <div className="About_Component">
                    <h1>Nossa História</h1>
                    <h2>Era agosto de 2011 e tínhamos idealizado uma chamada evangelística pelas ruas do nosso Bairro, e ter bonecões já era um desejo. Foi difícil encontrar quem fizesse, na época não era tão comum; e não  desmerecendo o trabalho de ninguém, quando encontramos, o preço era inacessível pra nós. Quase deixamos nosso sonho pra lá. Um dia [...]</h2>
                    <Link to="/sobre">
                        <label>Continuar lendo →</label>
                    </Link>
                </div>
                <div className="Contact_Component">
                    <h1>Contato</h1>
                    <h2>O Ateliê preza pelo contato personalizado com os clientes. Para entrar em contato com o Ateliê, basta usar um dos seguintes meios:</h2>
                    <ul>
                        <li>E-mail: <b>atelieliliinacio@gmail.com</b></li>
                        <li>Whatsapp: <b>(21) 9 7291-9788</b></li>
                        <li>Facebook: <b>facebook.com/liliInacio82</b></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export { Home };