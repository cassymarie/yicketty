import React from 'react'
import { connect } from 'react-redux'


const PlayerRowStatsRoster = (props) => {
  
    return (
        <>

        </>
    )
}

const mapStats = (state) => ({
  stats: state.mlb.playerSeasonStats
})

export default connect( mapStats )(PlayerRowStatsRoster)