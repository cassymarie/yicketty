import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TeamHeader = (props) => {
  const {logo, name_full, venue, city, state, color1, website} = props.team
  return (
    <>
      <Container style={{backgroundColor:`${color1}`}} fluid>
          <Row className="team-header">
          <Col bsPrefix="col team-info">
              <a href={website}><h1 className="team-title">{name_full}</h1></a>
              <p className="team-location">{venue} | {city},{state}</p>
          </Col>
          <Col xs={2} >
              <img className="team-logo" src={logo} alt={name_full}/>
          </Col>
          </Row>
        </Container>
    </>
  )
}

export default TeamHeader