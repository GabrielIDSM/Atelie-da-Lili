import React, { Component } from 'react';
import { Navbar } from './Navbar';
import axios from 'axios';
import loading from '../Image/Loading.gif'

class Simulation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Ctg1: 0,
            Ctg2: 0,
            Ctg3: 0,
            Ctg4: 0,
            Cep: '',
            Result: ''
        }
    }

    categoryOne = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState
            obj.Ctg1 = parseInt(value)
            return { obj }
        })
    }

    categoryTwo = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState
            obj.Ctg2 = parseInt(value)
            return { obj }
        })
    }

    categoryThree = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState
            obj.Ctg3 = parseInt(value)
            return { obj }
        })
    }

    categoryFour = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState
            obj.Ctg4 = parseInt(value)
            return { obj }
        })
    }

    changeCEP = (e) => {
        var value = e.target.value
        this.setState(prevState => {
            var obj = prevState
            obj.Cep = value
            return { obj }
        })
    }

    submit = (e) => {
        var totalPrice
        var auxCtg1
        var auxCtg2
        var auxCtg3
        var auxCtg4
        this.setState(prevState => {
            var obj = prevState
            obj.Result = 'Processando ...'
            return { obj }
        })
        this.setState(prevState => {
            var obj = prevState
            auxCtg1 = obj.Ctg1
            auxCtg2 = obj.Ctg2
            auxCtg3 = obj.Ctg3
            auxCtg4 = obj.Ctg4
            totalPrice = parseFloat(obj.Ctg1) * 260.0
            totalPrice += parseFloat(obj.Ctg2) * 260.0
            totalPrice += parseFloat(obj.Ctg3) * 280.0
            totalPrice += parseFloat(obj.Ctg4) * 350.0
            obj.Cep = obj.Cep.replace("-", "")
            return { obj }
        })
        var totalSimulation = 0
        let argsCtg1and2 = {
            servico: '41106',
            cepOrigem: '25943509',
            cepDestino: this.state.Cep.toString(),
            formato: '1',
            comprimento: 60.0,
            altura: 25.0,
            largura: 25.0,
            diametro: 25.0,
            peso: 2.0
        }
        let argsCtg3and4 = {
            servico: '41106',
            cepOrigem: '25943509',
            cepDestino: this.state.Cep.toString(),
            formato: '1',
            comprimento: 60.0,
            altura: 30.0,
            largura: 25.0,
            diametro: 25.0,
            peso: 2.0
        }
        axios.post('https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete', argsCtg1and2)
            .then(response => {
                console.log(response)
                totalSimulation += parseFloat(response.data.valor.replace(",", ".")) * (auxCtg1 + auxCtg2)
                axios.post('https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete', argsCtg3and4)
                    .then(response => {
                        console.log(response)
                        totalSimulation += parseFloat(response.data.valor.replace(",", ".")) * (auxCtg3 + auxCtg4)
                        totalPrice += totalSimulation
                        this.setState(prevState => {
                            var obj = prevState
                            totalPrice = Math.round(totalPrice * 100) / 100
                            obj.Result = "Valor total: R$" + totalPrice.toString()
                            return { obj }
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        this.setState(prevState => {
                            var obj = prevState
                            obj.Result = 'Erro!'
                            return { obj }
                        })
                    })
            })
            .catch(error => {
                console.log(error)
                this.setState(prevState => {
                    var obj = prevState
                    obj.Result = 'Erro!'
                    return { obj }
                })
            })
    }

    render() {
        return (
            <div className="Simulation">
                <Navbar active="/simule"/>
				<div className="Home-Content">
					<div className="Page-Title">
						<p> Simule sua compra </p>
					</div>
					<div className="Page-Sub-Title">
						<p>
							Agora você mesmo pode calcular o valor de sua compra e frete! Para materiais de pelúcia ou pedidos especiais, entre em contato com o Ateliê.
						</p>
					</div>
					<div className="Simulation-Form">
						<div className="Form-Item">
							<div className="Form-Item-Label">
								<p className="Form-Item-Label-Text"> Kit Cabeção </p>
							</div>
							<div className="Form-Item-Input">
								<select className="Simulation-Select" id="Ctg1" name="Ctg1" type="number" value={this.state.Ctg1} onChange={this.categoryOne}>
									<option value="0">0 unidades</option>
									<option value="1">1 unidade</option>
									<option value="2">2 unidades</option>
									<option value="3">3 unidades</option>
									<option value="4">4 unidades</option>
									<option value="5">5 unidades</option>
									<option value="6">6 unidades</option>
									<option value="7">7 unidades</option>
									<option value="8">8 unidades</option>
									<option value="9">9 unidades</option>
									<option value="10">10 unidades</option>
								</select>
							</div>
						</div>
						<div className="Form-Item">
							<div className="Form-Item-Label">
								<p className="Form-Item-Label-Text"> Kit Bíblia Comum / Kit Coração Comum </p>
							</div>
							<div className="Form-Item-Input">
								<select className="Simulation-Select" id="Ctg2" name="Ctg2" type="number" value={this.state.Ctg2} onChange={this.categoryTwo}>
									<option value="0">0 unidades</option>
									<option value="1">1 unidade</option>
									<option value="2">2 unidades</option>
									<option value="3">3 unidades</option>
									<option value="4">4 unidades</option>
									<option value="5">5 unidades</option>
									<option value="6">6 unidades</option>
									<option value="7">7 unidades</option>
									<option value="8">8 unidades</option>
									<option value="9">9 unidades</option>
									<option value="10">10 unidades</option>
								</select>
							</div>
						</div>
						<div className="Form-Item">
							<div className="Form-Item-Label">
								<p className="Form-Item-Label-Text"> Kit Bíblia Especial / Kit Coração Especial </p>
							</div>
							<div className="Form-Item-Input">
								<select className="Simulation-Select" id="Ctg3" name="Ctg3" type="number" value={this.state.Ctg3} onChange={this.categoryThree}>
									<option value="0">0 unidades</option>
									<option value="1">1 unidade</option>
									<option value="2">2 unidades</option>
									<option value="3">3 unidades</option>
									<option value="4">4 unidades</option>
									<option value="5">5 unidades</option>
									<option value="6">6 unidades</option>
									<option value="7">7 unidades</option>
									<option value="8">8 unidades</option>
									<option value="9">9 unidades</option>
									<option value="10">10 unidades</option>
								</select>
							</div>
						</div>
						<div className="Form-Item">
							<div className="Form-Item-Label">
								<p className="Form-Item-Label-Text"> Kit Lápis / Kit Ide Mundo / Kit Guita / Kit Casinha </p>
							</div>
							<div className="Form-Item-Input">
								<select className="Simulation-Select" id="Ctg4" name="Ctg4" type="number" value={this.state.Ctg4} onChange={this.categoryFour}>
									<option value="0">0 unidades</option>
									<option value="1">1 unidade</option>
									<option value="2">2 unidades</option>
									<option value="3">3 unidades</option>
									<option value="4">4 unidades</option>
									<option value="5">5 unidades</option>
									<option value="6">6 unidades</option>
									<option value="7">7 unidades</option>
									<option value="8">8 unidades</option>
									<option value="9">9 unidades</option>
									<option value="10">10 unidades</option>
								</select>
							</div>
						</div>
						<div className="Form-Item">
							<div className="Form-Item-Label">
								<p className="Form-Item-Label-Text"><i class="fas fa-map-marker-alt"></i> CEP </p>
							</div>
							<div className="Form-Item-Input">
								<input type="text" value={this.state.Cep} onChange={this.changeCEP}></input>
							</div>
						</div>
						<div className="Form-Submit">
							<button type="submit" onClick={this.submit}>Calcular</button>
						</div>
						<div className="Form-Result">
							{this.state && this.state.Result && this.state.Result !== 'Processando ...' &&
								<label className="Form-Result-Label">{this.state.Result}</label>
							}
                            {this.state && this.state.Result && this.state.Result === 'Processando ...' &&
								<img className="Form-Loading" src={loading} alt="loading"></img>
							}
						</div>
					</div>
				</div>
            </div>
        );
    }
}

export { Simulation };