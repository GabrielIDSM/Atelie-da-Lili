import React, { Component } from 'react';
import axios from 'axios';

class Frete extends Component {
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
            totalPrice = parseFloat(obj.Ctg1) * 250.0
            totalPrice += parseFloat(obj.Ctg2) * 250.0
            totalPrice += parseFloat(obj.Ctg3) * 280.0
            totalPrice += parseFloat(obj.Ctg4) * 320.0
            if (totalPrice >= 500) totalPrice = totalPrice * 0.92
            obj.Cep = obj.Cep.replace("-", "")
            return { obj }
        })
        var totalFrete = 0
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
                totalFrete += parseFloat(response.data.valor.replace(",", ".")) * (auxCtg1 + auxCtg2)
                axios.post('https://gabrielidsm-fretecorreios.herokuapp.com/correios/frete', argsCtg3and4)
                    .then(response => {
                        console.log(response)
                        totalFrete += parseFloat(response.data.valor.replace(",", ".")) * (auxCtg3 + auxCtg4)
                        totalPrice += totalFrete
                        this.setState(prevState => {
                            var obj = prevState
                            totalPrice = Math.round(totalPrice * 100) / 100
                            obj.Result = "Valor Total: R$" + totalPrice.toString()
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
            <div className="Frete">
                <h1>Simule Sua Compra</h1>
                <h2>Agora você mesmo pode calcular o valor de sua compra e frete!</h2>
                <h2>Para materiais de pelúcia ou pedidos especiais, entre em contato com o Ateliê. </h2>
                <h2>Para efetivar a compra, entre em contato com o Ateliê. </h2>
                <h2><b>*</b> Valores aproximados</h2>
                <h2><b>**</b> 8% de desconto para compras acima de R$500,00</h2>
                <div className="Frete_Div">
                    <div className="Div_Labels">
                        <label className="Frete_Label">Kit(s) Tipo Cabeção</label>
                        <label className="Frete_Label">Kit(s) Bíblia e Coração</label>
                    </div>
                    <div className="Div_Select">
                        <select className="Frete_Select" id="Ctg1" name="Ctg1" type="number" value={this.state.Ctg1} onChange={this.categoryOne}>
                            <option value="0">0 un.</option>
                            <option value="1">1 un.</option>
                            <option value="2">2 un.</option>
                            <option value="3">3 un.</option>
                            <option value="4">4 un.</option>
                            <option value="5">5 un.</option>
                            <option value="6">6 un.</option>
                            <option value="7">7 un.</option>
                            <option value="8">8 un.</option>
                            <option value="9">9 un.</option>
                            <option value="10">10 un.</option>
                        </select>
                        <select className="Frete_Select" id="Ctg2" name="Ctg2" type="number" value={this.state.Ctg2} onChange={this.categoryTwo}>
                            <option value="0">0 un.</option>
                            <option value="1">1 un.</option>
                            <option value="2">2 un.</option>
                            <option value="3">3 un.</option>
                            <option value="4">4 un.</option>
                            <option value="5">5 un.</option>
                            <option value="6">6 un.</option>
                            <option value="7">7 un.</option>
                            <option value="8">8 un.</option>
                            <option value="9">9 un.</option>
                            <option value="10">10 un.</option>
                        </select>
                    </div>
                </div>
                <div className="Frete_Div">
                    <div className="Div_Labels">
                        <label className="Frete_Label">Kit(s) Ide Mundo e Guita</label>
                        <label className="Frete_Label">Kit(s) Mochila, Lápis e Outros</label>
                    </div>
                    <div className="Div_Select">
                        <select className="Frete_Select" id="Ctg3" name="Ctg3" type="number" value={this.state.Ctg3} onChange={this.categoryThree}>
                            <option value="0">0 un.</option>
                            <option value="1">1 un.</option>
                            <option value="2">2 un.</option>
                            <option value="3">3 un.</option>
                            <option value="4">4 un.</option>
                            <option value="5">5 un.</option>
                            <option value="6">6 un.</option>
                            <option value="7">7 un.</option>
                            <option value="8">8 un.</option>
                            <option value="9">9 un.</option>
                            <option value="10">10 un.</option>
                        </select>
                        <select className="Frete_Select" id="Ctg4" name="Ctg4" type="number" value={this.state.Ctg4} onChange={this.categoryFour}>
                            <option value="0">0 un.</option>
                            <option value="1">1 un.</option>
                            <option value="2">2 un.</option>
                            <option value="3">3 un.</option>
                            <option value="4">4 un.</option>
                            <option value="5">5 un.</option>
                            <option value="6">6 un.</option>
                            <option value="7">7 un.</option>
                            <option value="8">8 un.</option>
                            <option value="9">9 un.</option>
                            <option value="10">10 un.</option>
                        </select>
                    </div>
                </div>
                <div className="CEP_Div">
                    <label className="CEP_Label">CEP</label>
                    <input type="text" value={this.state.Cep} onChange={this.changeCEP}></input>
                </div>
                <div className="Button_Div">
                    <button type="submit" onClick={this.submit}>Calcular</button>
                </div>
                <div className="Result_Div">
                    {this.state && this.state.Result &&
                        <label className="Result_Label">{this.state.Result}</label>
                    }
                </div>
            </div>
        );
    }
}

export { Frete };