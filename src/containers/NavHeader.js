import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../nav.css'

class NavHeader extends Component {

    render(){
        return (
        <Navbar bg="dark" variant="dark" sticky="top" bsPrefix="nav-header navbar">
            <Navbar.Brand bsPrefix="header-brand" href="home">Yicketty</Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link href="/mlbTeams">MLB Teams</Nav.Link>
                <Nav.Link href="/mvp/lineups">Profile</Nav.Link>
                <Nav.Link>Play Game</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}

export default connect()(NavHeader)