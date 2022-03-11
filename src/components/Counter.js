import { useState } from "react";
import ("./Counter.css")

export default function Counter(){
    const [number, setNumber] = useState(0);
    function decrease(){
        if(number === 0){
            return
        }else{
            setNumber(number - 1);
        }
    }

    function increase(){
        setNumber(number + 1);
    }

    function reset(){
        setNumber(0);
    }

    return(
    <div id="app">
        <h1>Contador</h1>
        <p id="number">{number}</p>
        <button type="button" id="decrease" onClick={decrease}>DIMINUIR</button>
        <button type="button"  id="reset" onClick={reset}>RESETAR</button>
        <button type="button" id="increase" onClick={increase}>AUMENTAR</button>
    </div>
    );
}
