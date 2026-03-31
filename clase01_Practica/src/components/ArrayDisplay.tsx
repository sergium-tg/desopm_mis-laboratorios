const myArray: string[] = ['primer elemento', 'segundo elemento', 'tercer elemento']

function ArrayDisplay(){

    return(<>
        <ol>
            {myArray.map((item, index) => (<li key={index}>{item}</li>))}
        </ol>
    </>)
}

export default ArrayDisplay;