import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';


function App () {
    return (
        <div>
            <Clock />
        </div>
    );
}


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    ReactDOM.render(<h1>You Done Messed Up A-Aron</h1>, root);

    ReactDOM.render(
        <App />,
        root
    );
})
