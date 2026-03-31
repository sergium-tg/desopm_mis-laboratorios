import { useState, useEffect } from "react";

function CleanupExample(){
    const [secs, setSecs] = useState<number>(0);

    useEffect(() => {
        const temporizador = setInterval(() => { setSecs(s => s + 1)}, 1000);

        return () => {
            clearInterval(temporizador);
            console.log("Se limpió el intervalo");
        }
    }, []);

    return(<>
        <p>Tiempo en segundos: {secs}</p>
    </>)
}

export default CleanupExample;