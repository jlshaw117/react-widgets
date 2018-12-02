import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs.jsx';

const panes = [
    {title: 'One', content: 'This is the first tab'},
    {title: 'Two', content: 'This is the second tab'},
    {title: 'Three', content: 'This is the third tab'},
]

function App () {
    return (
        <div className='main'>
            <Clock />
            <Tab panes={panes} />
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
