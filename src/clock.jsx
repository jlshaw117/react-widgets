import React from 'react';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.int = null;
    }

    tick () {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount () {
        this.int = setInterval(() => this.tick(), 1000);
    }

    componentWillMount () {
        clearInterval(this.int);
    }

    render () {
        return (
            <div className='parent'>
                <h1>Clock</h1>
                <section className='clock'>
                    <span className='time'>
                        <h1>Time: </h1>
                        <h1>{this.state.time.toLocaleTimeString()}</h1>
                    </span>    
                    <span className='date'>
                        <h1>Date: </h1>
                        <h1>{this.state.time.toDateString()}</h1>
                    </span>    
                </section>
            </div>
        );
    }
}

export default Clock;