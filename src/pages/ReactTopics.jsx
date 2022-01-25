import React from 'react';
import {Link, Routes, Route} from 'react-router-dom'
import Topic from './Topic';

function ReactTopics() {

    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to='jsx'>JSX</Link>
                </li>
                <li>
                    <Link to='props'>Props</Link>
                </li>
                <li>
                    <Link to='estados'>Estados</Link>
                </li>
                <li>
                    <Link to='componentes'>Componentes</Link>
                </li>
            </ul>
            <Routes>
                <Route path=':topic' element={<Topic/>}/>
            </Routes>
            
        </div>
    );
}

export default ReactTopics;
