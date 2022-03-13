import React, { Component } from "react";
import { Navbar } from "./Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar active="/" />
                <div className="Home">
                    <div className="Home-Cover">
                        <div className="Page-Main-Title">
                            <p>Olá, este é o Ateliê Lili Inácio!</p>
                        </div>
                        <div className="Page-Main-Sub-Title">
                            <p>
                                Bem-vindo a este espaço que é nosso e foi
                                projetado com muito carinho pra você! Aqui você
                                poderá escolher e sonhar com o seu mascote. E de
                                sonhos eu entendo, pois o ateliê nasceu de um
                                sonho!
                            </p>
                        </div>
                    </div>
					<div className="Home-Separator"></div>
					<div className="Home-Content">
						<div className="Page-Title">
							<p>Contato</p>
						</div>
						<div className="Page-Sub-Title">
							<p>
								O Ateliê preza pelo contato personalizado com os
								clientes. Para entrar em contato com o Ateliê, basta
								usar um dos seguintes meios:
							</p>
						</div>
						<div className="Page-Sub-List">
							<div className="Page-Sub-List-Box">
								<p className="Page-Sub-List-Item"><i className="List-Icon fas fa-envelope"></i>atelieliliinacio@gmail.com</p>
							</div>
							<div className="Page-Sub-List-Box">
								<p className="Page-Sub-List-Item"><i className="List-Icon fab fa-whatsapp"></i>(21) 97291-9788</p>
							</div>
							<div className="Page-Sub-List-Box">
								<p className="Page-Sub-List-Item"><i className="List-Icon fab fa-facebook"></i>facebook.com/liliInacio82</p>
							</div>
						</div>
					</div>
                </div>
            </div>
        );
    }
}

export { Home };
