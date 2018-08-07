import React from 'react';
import { Card, Table } from 'react-materialize';
import securityNames from '../data/securityNames';
import historicalEPS from '../data/historicalEPS';
import { SecurityContext } from "../Macks";

export default function HistoricalData() {
    return (
        <Card title={`Historical Data for ${securityNames.AAPL} (AAPL)`}>
            <Table centered hoverable bordered>
                <thead>
                <th>Fiscal Quarter End</th>
                <th>Consensus EPS forecast</th>
                <th>Actual EPS</th>
                <th>% Surprise</th>
                </thead>
                <tbody>
                {historicalEPS.AAPL.map(({ fiscalQuarterEnd, consensusForecast, EPS, percentageSurprise }) => (
                    <tr>
                        <td>{fiscalQuarterEnd}</td>
                        <td>{consensusForecast}</td>
                        <td>{EPS}</td>
                        <td>{percentageSurprise}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>
    );
    /*
    return (
        <SecurityContext.Consumer>
            {({ selectedSecurity }) => (
                <Card title={`Historical Data for ${securityNames[selectedSecurity]} (${selectedSecurity})`}>
                    <Table centered hoverable bordered>
                        <thead>
                        <th>Fiscal Quarter End</th>
                        <th>Consensus EPS forecast</th>
                        <th>Actual EPS</th>
                        <th>% Surprise</th>
                        </thead>
                        <tbody>
                        {historicalEPS[selectedSecurity].map(({ fiscalQuarterEnd, consensusForecast, EPS, percentageSurprise }) => (
                            <tr>
                                <td>{fiscalQuarterEnd}</td>
                                <td>{consensusForecast}</td>
                                <td>{EPS}</td>
                                <td>{percentageSurprise}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Card>
            )}
        </SecurityContext.Consumer>
    );*/
}