import React, {memo} from 'react';

const MemoContadorSon = ({contador, sumar, restar}) => {

    console.log('rendeizado de componente hijo')

    return (
        <div style={{border:'thin solid #000', margin:'1rem', padding:'1rem'}}>
            <h2>Hijo contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
        </div>
    );
}

export default memo(MemoContadorSon)
