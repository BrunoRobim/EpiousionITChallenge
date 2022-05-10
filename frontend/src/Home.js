import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link, Router } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <Button color="link" href="/clients">Clients</Button>
                </Container>
            </div>
        );
    }
}
export default Home;