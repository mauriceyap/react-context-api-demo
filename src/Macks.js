import React, { Component, Fragment } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './Macks.css';

export const SecurityContext = React.createContext();

class SecurityContextProvider extends Component {
    state = {
        selectedSecurity: 'AAPL',
        setSelectedSecurity: (selectedSecurity) => {
            this.setState({
                selectedSecurity
            });
        }
    };
    render() {
        return (
            <SecurityContext.Provider value={this.state}>
                {this.props.children}
            </SecurityContext.Provider>
        );
    }
}

class Macks extends Component {
  render() {
    return (
        <Fragment>
            <Title />
            <Body />
        </Fragment>
    );
  }
}

export default Macks;
