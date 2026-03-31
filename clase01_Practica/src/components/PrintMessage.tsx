interface PrintMessageProps {
    message: string;
}

function PrintMessage({message}: PrintMessageProps){
    
    return (<>
        <h2>Probando Props. Esto es un PrintMessage con Props.</h2>
        <p>{message}</p>
    </>)
}

export default PrintMessage;