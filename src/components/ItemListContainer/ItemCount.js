import React, { useState } from 'react';

function Contador() {
const [counter, setCounter] = useState(0);

const sumar = () =>{
   
setCounter(counter +1)
}
const resta = () =>{

    setCounter(counter -1)
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

