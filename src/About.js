import React, { Component } from 'react';
import { Bar } from './Bar';

class About extends Component {
    render() {
        return (
            <div className="Page">
                <Bar></Bar>
                <img className="Gif_one" src={ require('./images/Elogios.gif') } alt="Comentarios"></img>
                <div className="About_Full_Component">
                    <h1>Sobre o Ateliê</h1>
                    <p>Era agosto de 2011 e tínhamos idealizado uma chamada evangelística pelas ruas do Bairro e queríamos realizar com bonecões. Fui ver o preço... E não desmerecendo o trabalho de ninguém... Era inviável para mim. Quase deixei o sonho pra lá. Um dia a noite,levei meus filhos numa pracinha pra brincar e vi uma bola gigante, daquelas recreativas.. E pensei: É isso! Farei o molde a partir dela! Gente,  Ficou horrível,  mas foi um sucesso. A partir daí, fui adaptando o modelo até começarmos a produzir mascotes de vestir tipo cabeça de fantoche.</p>
                    <p>Esse formato me incomodava.. Não era original. Outras pessoas já produziam.Até que em 2012 tive uma ideia diferente... Era um desafio, pois já tínhamos uma clientela acostumada com os nossos modelos. Mas saí da zona de conforto e criei uma modelagem autoral e totalmente original. E não demorou muito para que pessoas do Brasil e de várias partes do mundo se apaixonaram por eles. Estamos nos aperfeiçoando em todas as áreas. Atendimento, pontualidade nas entregas e qualidade dos materiais, pois entendemos que sonho é coisa séria.</p>
                    <h2>Agradecimentos</h2>
                    <p>Nessa trajetória,não esqueço de ninguém! Agradeço ao meu <b>tio Fazinho e tia Regina Inácio</b> que me ajudavam a encontrar espuma.. Quantas vezes meu tio foi buscar comigo? Nem sei! Ele me fez comprar meus primeiros 10 metros de espuma ( Na época,  duraria uma eternidade) e foi nesse dia tbm que comprei meu 1° latão de cola... Que realização (eu só comprava do pequeno rsrs). <b>Sara Inácio e Douglas Inácio</b> que já foram os "Funcionários do mês" do ateliê.</p>
                    <p>Meus pais.. Sem palavras.. Nossa! Meus irmãos. Marido e filhos... Amigos e parceiros das madrugadas. </p>
                    <p>E sem demagogia alguma, meus amigos clientes. Muitos amigos que ficaram e viraram bons amigos mesmo. Estiveram comigo em altos e baixos.. E permaneceram. </p>
                </div>
            </div>
        );
    }
}

export { About };