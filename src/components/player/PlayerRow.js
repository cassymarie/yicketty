import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Draggable from 'react-draggable'

class PlayerRow extends Component {

    render(){
      return (
        this.props.position === "P" ? <></> :
          (<tr className="player-roster" id={this.props.id}>
            <td className="roster-number">{this.props.jersey}</td>
            <td className="roster-name">{this.props.nameLast}, {this.props.nameFirst}</td>
            <td className="roster-position">{this.props.position}</td>
          </tr>)
      )
    }
}

export default connect()(PlayerRow)

// import 'components/StackedList/StackedListItem.html' as StackedListItem