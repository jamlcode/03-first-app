import React from 'react';     
import ReactDOM from 'react-dom/client';
// import FirstApp from './FirstApp';
// import './styles.css' 
import CounterApp from './CounterApp';

// const state = {
//     value: 'active',
//     label: 'Activo'
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp initialValue={10} />
        {/* <FirstApp 
            title="Hola, soy Goku" 
            state={state} 
        /> */}
    </React.StrictMode>
)