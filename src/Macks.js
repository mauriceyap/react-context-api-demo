import React, { Component, Fragment } from 'react';
import Title from './components/Title';
import Body from './components/Body';
import './Macks.css';

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
