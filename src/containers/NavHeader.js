import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar } from 'react-bootstrap'
import { currentPage } from '../actions/AppActionCreators.js'

import '../styles/nav.css'

class NavHeader extends Component {

    pageLabel = () => {
        switch (this.props.page) {
            case 'teams':
                return 'MLB Teams'
            case 'team':
                return this.props.team
            case 'login':
                return 'Login'
            case 'game':
                return 'Play Ball!'
            case 'profile':
                return this.props.user.name_first + "'s Page" 
            default:
                return ''
        }
    }

    render(){
        return (
        <Navbar bg="dark" variant="dark" sticky="top" bsPrefix="nav-header navbar">
            <Navbar.Brand bsPrefix="header-brand" href="home">Yicketty</Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link href="/mlbTeams">Teams</Nav.Link>
                { this.props.user.id === null ? 
                    <>
                    <Nav.Link href="/login">Play Game</Nav.Link> 
                    </>:
                    <>
                    <Nav.Link href="/mvp/lineups">Profile</Nav.Link>
                    <Nav.Link href="/yicketty">Play Game</Nav.Link> 
                    </>
                }
            </Nav>
            <Nav className="nav-page-label">
                <Nav.Link disabled>{this.pageLabel()}</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    page: state.app.currentPage,
    team: state.mlb.selectedTeam.name_full
})

export default connect(mapState, { currentPage })(NavHeader)