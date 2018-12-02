import React from 'react';

class Header extends React.Component {
    render() {
        const selected = this.props.selected;
        const headers = this.props.panes.map((pane, idx) => {
            return (
                <li
                    key={idx}
                    className={idx === selected ? 'active' : ''}
                    onClick={() => this.props.onCurrentTab(idx)}>
                    {pane.title}
                </li>
            );
        });
        return (
            <ul className='tab-header'>
                {headers}
            </ul>
        );
    }
}



class Tab extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            selected: 0
        };
        this.currentTab = this.currentTab.bind(this);
    }

    currentTab(idx) {
        this.setState({selected: idx})
    }
    
    render () {
        const pane = this.props.panes[this.state.selected];
        return (
            <div className='parent'>
                <h1>Tabs</h1>
                <div className='tabs'>
                    <Header
                        selected={this.state.selected}
                        panes={this.props.panes}
                        onCurrentTab={this.currentTab}>
                    </Header>
                    <div className='tab-content'>
                        <article>
                            {pane.content}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab;