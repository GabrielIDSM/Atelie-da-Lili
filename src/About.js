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
                    <p>Era agosto de 2011 e tínhamos idealizado uma chamada evangelística pelas ruas do nosso Bairro, e ter bonecões já era um desejo. Foi difícil encontrar quem fizesse, na época não era tão comum; e não  desmerecendo o trabalho de ninguém, quando encontramos, o preço era inacessível pra nós. Quase deixamos nosso sonho pra lá. Um dia passeando com meus filhos, bati meus olhos naquelas bolas gigantes, recreativas.. E pensei: - É isso! Farei o molde a partir dela... Gente!  Ficou horrível, mas foi um sucesso</p>
                    <p>A partir daí, fomos  adaptando o modelo até ficar melhorzinho rs. Então surge a nossa 1° cliente no Orkut!!! ( Magna Raimundo,  amiga da ateliê até hoje). Na mesma procura e sonho. - Por que não vender? Fiz um pra ela.. E começarmos a produzir mascotes de vestir ( Mas do tipo cabeça de fantoche). </p>
                    <p>Este não era um modelo original, outras pessoas já produziam. Até que em 2012, a partir do desafio de um amigo, tive uma ideia diferente... E foi assim que criei uma modelagem autoral e totalmente original. Não demorou muito para que pessoas de quase todo o Brasil e de várias partes do mundo se apaixonassem por eles. Estamos nos aperfeiçoando.</p>
                    <h2>Agradecimentos</h2>
                    <p>Tenho muita gratidão por ter participado de tantos sonhos e projetos que mal consigo enumerar! Cantatas, musicais, evangelismo de rua, em tribos indígenas, comunidades ribeirinhas... E as apresentações que são feitas em alas infantis de hospitais por todo o Brasil? Ver o sorriso e alegria dessas crianças extraordinário, é algo Divino! - Sem palavras! Eu sou TODA gratidão por fazer parte desse plano maior de alguma forma. </p>
                </div>
            </div>
        );
    }
}

export { About };