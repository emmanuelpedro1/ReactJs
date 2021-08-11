import React, { useState } from 'react';

function Contador() {
const [counter, setCounter] = useState(0);

const sumar = () =>{
    if( counter <5 && counter >0){

setCounter(counter +1)}
}
const resta = () =>{
  if(counter <0 && counter >5){

    setCounter(counter -1)}
}

return(
    <div>
        Stock: {counter} 
        <button onClick={resta}>-</button>
        <button onClick={sumar}>+</button>
       
    </div>
);

}
export default Contador;

