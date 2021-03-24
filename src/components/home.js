import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {

  return (
    <>
    <div className="home-button">
      <h2 className="page-title"> Home Page </h2>
    <Link to={`/mlbteams`}><button>View MLB Teams</button></Link>
    <Link to={`/mvp/lineups`}><button>My Lineups</button></Link>
    <Link to={`/mvp/game`}><button>Play Yicketty</button></Link>
    {/* <Link to={`/yicketty`}><button> Play Game </button></Link> */}
    </div>
    </>
  )
}

export default Home