import React from 'react'
import { connect } from 'react-redux'



const PlayerCard = (props) => {

  return(
    <div className="player-card">
      <h2>Player Card</h2>
    </div>
  )
}

const mapStateToProps = (state) => ({
  player: state.mlb.currentPlayer,
  images: state.mlb.playerImages,
  stats: state.mlb.stats
})


export default connect(mapStateToProps)(PlayerCard)