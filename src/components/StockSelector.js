import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-materialize';
import securityNames from '../data/securityNames';
import securitiesList from '../data/securitiesList';

export default class StockSelector extends Component {
    constructor() {
        super();
        this.state = {
            selectedSecurity: null,
        };
        this.setSelectedSecurity = this.setSelectedSecurity.bind(this);
    }

    setSelectedSecurity(selectedSecurity) {
        return () => {
            this.setState({
                selectedSecurity,
            });
        }
    }

    render() {
        const { selectedSecurity } = this.state;
        return (
            <Card title={'Show me historical EPS summary for...'}>
                {securitiesList.map(security => (
                    <Fragment>
                        <Button
                            className={security === selectedSecurity ? 'green lighten-1 black-text' : 'green darken-4'}
                            waves={'light'}
                            onClick={this.setSelectedSecurity(security)}
                        >
                            {securityNames[security]}
                        </Button>
                        <br /><br />
                    </Fragment>
                ))}
                <p>
                    Earnings Per Share (EPS) represents the portion of a company's profit allocated to each outstanding{' '}
                    share of common stock. It is an indicator of a company's profitability.
                </p>
                <br />
                <p>
                    Consensus EPS is the combined estimate of a company's EPS by analysts.
                </p>
            </Card>
        );
    }
}