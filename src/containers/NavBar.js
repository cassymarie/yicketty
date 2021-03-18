import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {
    render(){
        return (
            <div className="navbar navbar-default">
            </div>
        )
    }
}

export default connect()(NavBar)