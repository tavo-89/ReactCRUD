import React, {useState, useCallback} from 'react';
import MemoContadorSon from './MemoContadorSon';

const MemoContador = () => {

    const [contador, setContador] = useState(0);
    const [input, setInput] = useState('');

    //useCallback sirve para memorizar una funcion para q no renderice cada vezz q se hace un cambio
    /* let sumar = () => setContador(contador + 1) */
    let sumar = useCallback(()=>setContador(contador + 1),[contador])

    /* let restar = () => setContador(contador - 1) */
    let restar = useCallback(()=>setContador(contador - 1),[contador])

    let handleInput= (e)=> setInput(e.target.value)

    return (
        <div style={{textAlign:'center'}}>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
            <input type="text" onChange={handleInput} value={input} />
            <MemoContadorSon sumar={sumar} restar={restar} contador={contador}/>
        </div>
    );
}

export default MemoContador;
