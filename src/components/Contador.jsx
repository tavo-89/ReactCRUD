import React, {useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState({
        count1 : 0,
        count2 : 0
    });

    const { count1, count2} = contador

    let incrementar = ()=>{
        setContador({
            count1 : count1 + 1,
            count2 : count2 + 2
        })
    }

    let decrementar = ()=>{
        setContador({
            count1 : count1 - 1,
            count2 : count2 - 2 
        })
    }

    let handleReset = ()=>{
        setContador({
            count1 : 0,
            count2 : 0
        })
    }

    return (
        <div>
            <h3>contador 1:  {count1}</h3>
            <h3>contador 2:  {count2}</h3>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>

            <button onClick={handleReset}>Resetear</button>
        </div>
    );
}

export default Contador;
