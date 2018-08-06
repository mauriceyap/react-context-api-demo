import React from 'react';
import { Container, Section } from 'react-materialize';
import logo from '../logo.png';

const style = {
    textAlign: 'center',
    padding: '1em 0',
};

const logoImageStyle = {
    width:'100%',
    maxWidth: 500,
};

const taglineStyle = {
    fontSize: '2em',
    fontWeight: 700,
};

export default function Title() {
    return (
        <div style={style} className={'white'}>
            <Container>
                <Section>
                    <img alt={'Macks - Your Research. Our Success.'} src={logo} style={logoImageStyle} />
                    <br />
                    <span style={taglineStyle}>Your Research. Our Success.</span>
                </Section>
            </Container>
        </div>
    );
}