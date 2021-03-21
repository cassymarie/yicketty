import React from 'react'

const PlayerCardStatsRow = (props) => {
    return (
      Object.keys(props).length > 0 ? (<tr>
          <td className="stats-name">{props.season} - {props.team_short}</td>
          <td>{props.ab}</td>
          <td>{props.r}</td>
          <td>{props.h}</td>
          <td>{props.hr}</td>
          <td>{props.rbi}</td>
          <td>{props.sb}</td>
          <td>{props.avg}</td>
          <td>{props.obp}</td>
          <td>{props.ops}</td>
        </tr>) : <></>
    )
}

export default PlayerCardStatsRow