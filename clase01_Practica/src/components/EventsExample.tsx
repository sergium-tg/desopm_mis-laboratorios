import { useEffect, useState } from "react";

function EventsExample(){
    const [tecleando, setTecleando] = useState<string>("")
    const [digitado, setDigitado] = useState<string>("");

    const sumar = (e: any, valor: any) => {
        console.log('Evento del Click', e);
        console.log(`Has digitado: ${valor}`);
        setDigitado("");
    }

    useEffect(() => {
        console.log(`En el input de texto: ${tecleando}`)
    },[tecleando]);


    return (<>
        <button onClick={(e) => sumar(e, digitado)}>Ejecutar</button>
        <input type="text"
            placeholder="Texto para mostrar en un console log"
            value={digitado}
            onChange={e => setDigitado(e.target.value)}>
        </input>
        <input type="text"
            placeholder="Lo que estoy tecleando"
            value={tecleando}
            onChange={e => setTecleando(e.target.value)}>
        </input>
    </>)
}

export default EventsExample;