import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function somarNumeros() {
    let n1 = prompt("Digite o primeiro número")
    let n2 = prompt("Digite o segundo número")

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    const resultado = "O Resultado é igual a " + (n1 + n2);
    document.getElementById('divResultado').innerHTML = resultado
  }

  function subtrairNumeros() {
    let n1 = prompt("Digite o primeiro número")
    let n2 = prompt("Digite o segundo número")

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    const resultado = "O Resultado é igual a " + (n1 - n2);
    document.getElementById('divResultado').innerHTML = resultado

  }

  function multiplicarNumeros() {
    let n1 = prompt("Digite o primeiro número")
    let n2 = prompt("Digite o segundo número")

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    const resultado = "O Resultado é igual a " + (n1 * n2);
    document.getElementById('divResultado').innerHTML = resultado

  }

  function dividirNumeros() {
    let n1 = prompt("Digite o primeiro número")
    let n2 = prompt("Digite o segundo número")

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    const resultado = "O Resultado é igual a " + (n1 / n2);
    document.getElementById('divResultado').innerHTML = resultado

  }

  function limpar() {
    document.getElementById('divResultado').innerHTML = ""
  }



  function calcImc() {
    let peso = prompt("Digite seu peso")
    let altura = prompt("Digite sua altura")
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    let imc = peso / (altura * altura);
    let resultado;
    if (imc < 18.5) {
      document.getElementById('resultado-imc').innerHTML = "Muito Magro"
    } else if (imc >= 18.5 && imc < 25) {
      document.getElementById('resultado-imc').innerHTML = "Normal"
    } else if (imc >= 25 && imc < 30) {
      document.getElementById('resultado-imc').innerHTML = "Sobrepeso"
    } else if (imc >= 30 && imc < 35) {
      document.getElementById('resultado-imc').innerHTML = "Obeso grau 1"
    } else if (imc >= 35 && imc < 40) {
      document.getElementById('resultado-imc').innerHTML = "Obeso grau 2"
    } else {
      document.getElementById('resultado-imc').innerHTML = "Obeso grau 3"
    }
  }

  return (
    <>
      <h1>Funções</h1>
      <div className="card">
        <button onClick={somarNumeros}>Somar Numeros</button>
        <button onClick={subtrairNumeros}>Subtrair Numeros</button>
        <button onClick={multiplicarNumeros}>Multiplicar Numeros</button>
        <button onClick={dividirNumeros}>Dividir Numeros</button>
      </div>
      <div id='divResultado'></div>
      <br />
      <button onClick={limpar}>Limpar</button>

      <br /><br /> <hr />  <br /><br />

      <h1>IMC</h1>
      <div className="card">
        <button onClick={calcImc}>Calcular IMC</button>
        <div id="resultado-imc"></div>
      </div>
    </>
  )





}

export default App
