import Boton from './Botones';
import Screen from './Screen';
import BotonBorrar from './Borrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora(){

    const [ input, setInput ] = useState(' ');
  
    const agregarInput = valor =>{
      setInput(input + valor);
    };
  
    const calcularResultado = () =>{
      setInput(evaluate(input));
    };
  
    const sin = () =>{
      setInput(Math.sin(input))
    };
    const cos = () =>{
      setInput(Math.cos(input))
    };
    const tag = () =>{
      setInput(Math.tan(input))
    };

    const raizCuadrada = () =>{
      setInput(Math.pow(input, 1/2))
    };

    const raizCubica = () =>{
      setInput(Math.pow(input, 1/3))
    };

    
    
    const elevadoPorTres = () =>{
        setInput(Math.pow(input, 3))
      };
    
    const elevadoPorDos = () =>{
    setInput(Math.pow(input, 2))
    };
  
    const ln = () =>{
      setInput(Math.log(input));
    };
    const pi = () =>{
      setInput(Math.PI)
    };
    const efunc = ()=> { 
      setInput(Math.E)
    };
  
    const log = () =>{
      setInput(Math.log10(input))
    };
  
  
    const fact = () =>{
      let i, num, f;
      f=1
      num=input;
      for(i=1; i<= num; i++){
        f=f*i
      }
      i=i-1
      setInput(f)
    };  
  
    return(
        <div className="main">
            <div className="calculator">
                <div className="inner"> <Screen input={input}/> </div>
                
                  <Boton click={sin}><div className="inner">sin</div></Boton>
                  <Boton click={cos}><div className="inner">cos</div></Boton>
                  <Boton click={tag}><div className="inner">tg</div></Boton>
                  
                  <Boton click={log}><div className="inner">Log</div></Boton>
                  <Boton click={ln}><div className="inner">Ln</div></Boton>
                  
                  <Boton click={fact}><div className="inner">x!</div></Boton>
                  

                  
                  <Boton click={elevadoPorDos}>x<sup>2</sup></Boton>
                  <Boton click={elevadoPorTres}><div className="inner">x<sup>3</sup></div></Boton>
                  
                  <Boton click={raizCuadrada}><div className="inner">√</div></Boton>
                  <Boton click={raizCubica}><div className="inner"><sup>3</sup>√</div></Boton>

                  
                  
                  <Boton click={agregarInput}>7</Boton>
                  <Boton click={agregarInput}>8</Boton>
                  <Boton click={agregarInput}>9</Boton>
                  
                  <BotonBorrar clickClear={() => setInput('')}><div className="pepito">C</div></BotonBorrar>
                  <Boton click={calcularResultado} id='igual'>=</Boton>

                  
                  <Boton click={agregarInput}>4</Boton>
                  <Boton click={agregarInput}>5</Boton>
                  <Boton click={agregarInput}>6</Boton>
                  <Boton click={agregarInput}>+</Boton>
                  <Boton click={agregarInput}>-</Boton>
                  
                  <Boton click={agregarInput}>1</Boton>
                  <Boton click={agregarInput}>2</Boton>
                  <Boton click={agregarInput}>3</Boton>

                  <Boton click={agregarInput}>*</Boton>
                  <Boton click={agregarInput}>/</Boton>
                  
                  <Boton click={pi}><div className="inner">π</div></Boton>
                  <Boton click={agregarInput}>0</Boton>
                  <Boton click={efunc}><div className="inner">e</div></Boton>
                  <Boton click={agregarInput}>.</Boton>
                  
                
            </div>
        </div>
    );
  }
  
  export default Calculadora;