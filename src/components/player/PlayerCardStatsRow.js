import React from 'react'
import { connect } from 'react-redux'

const PlayerCardStatsRow = (props) => {

  const {ab, r, h, hr, rbi, sb, avg, obp, ops, w, l, era, g, gs, sv, ip, so, whip, season, team_short, pitcher} = props

  const pitchingValues = () => { 
      return (
        <>
          <td>{w}</td>
          <td>{l}</td>
          <td>{era}</td>
          <td>{g}</td>
          <td>{gs}</td>
          <td>{sv}</td>
          <td>{ip}</td>
          <td>{so}</td>
          <td>{whip}</td>
        </>
      )
  }

  const hittingValues = () => { 
    return (
      <>
        <td>{ab}</td>
        <td>{r}</td>
        <td>{h}</td>
        <td>{hr}</td>
        <td>{rbi}</td>
        <td>{sb}</td>
        <td>{avg}</td>
        <td>{obp}</td>
        <td>{ops}</td>
      </>
    )
}

    return (
      <tr>
          <td className="stats-name">{season} - {team_short}</td>
          { pitcher ? pitchingValues() : hittingValues() }
      </tr> 

    )
}

const mapState = (state) => ({
  pitcher: state.mlb.pitcherToggle
})

export default connect(mapState)(PlayerCardStatsRow)
