import React, { Fragment } from 'react';
import { Card, Button } from 'react-materialize';
import securityNames from '../data/securityNames';
import securitiesList from '../data/securitiesList';

export default function StockSelector() {
    return (
        <Card title={'Show me historical EPS summary for...'}>
            {securitiesList.map(security => (
                <Fragment>
                    <Button className={'green darken-4'} waves={'light'}>{securityNames[security]}</Button>
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