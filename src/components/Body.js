import React from 'react';
import { Container, Row, Col, Section } from 'react-materialize';
import StockSelector from "./StockSelector";
import HistoricalData from "./HistoricalData";

export default function Body() {
    return (
        <div>
            <Container>
                <Section>
                    <Row>
                        <Col s={12} l={5}><StockSelector /></Col>
                        <Col s={12} l={7}><HistoricalData /></Col>
                    </Row>
                </Section>
            </Container>
        </div>
    );
}