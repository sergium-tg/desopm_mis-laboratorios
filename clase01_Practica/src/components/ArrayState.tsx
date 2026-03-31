import { useState } from "react";

function ArrayState(){
    const [items, setItems] = useState<number[]>([])
    const [otro, setOtro] = useState<number | "">("")

    const addItem = () => {
        if (typeof otro === "number")
            setItems(itms => [...itms, otro])
            setOtro("")
    }

    return(<>
        <input type="number"
            placeholder="escribe el nuevo numero"
            value={otro}
            onChange={e => { 
                const val = e.target.value;
                setOtro(val === "" ? "" : Number(val)); }}
        />
        <button onClick={addItem}>Agregar Numero</button>
        <ul>
            {items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
    </>)
}

export default ArrayState