import { useState } from "react";

function Counter(){
    const[contador, setContador] = useState<number>(0);

    return(<>
        <h2>Prueba componente Contador</h2>
        <p>Contador: { contador }</p>
        <button onClick={() => setContador(contador + 1)}> Aumentar en 1 </button>
    </>)
}

export default Counter;