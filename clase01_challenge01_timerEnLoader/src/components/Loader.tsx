import { useEffect } from "react"

interface Props{
    cargaCompletada: () => void
}

function Loader({cargaCompletada}: Props){
    
    useEffect(() => {
        const temporizador = setTimeout(() => { cargaCompletada()}, 2000);

        return () => clearTimeout(temporizador);
    }, [2000, cargaCompletada])
    
    return( 
        <div className="loader">
            Cargando Contactos......
        </div>     
    )
}

export default Loader