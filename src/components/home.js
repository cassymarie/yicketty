import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
//   const {name, name_full, color1, logo, id} = props
    console.log(props)
  return (
    <>
    <div className="home-button">
      <h2 className=""> Home Page </h2>
    <Link to={`/mlbteams`}><button>View MLB Teams</button></Link>
    <Link to={`/mvp/lineups`}><button>My Lineups</button></Link>
    {/* <Link to={`/yicketty`}><button> Play Game </button></Link> */}
    </div>
    </>
  )
}

export default Home