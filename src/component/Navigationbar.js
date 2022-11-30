import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { fetchMoviesSearch } from '../redux';

const Navigationbar = ({moviesData, fetchMoviesSearch}) => {

  const location = useLocation();
  
  const search = (q) => {
    fetchMoviesSearch(q);
  }
  
  return (
    <Navbar expand="lg" variant="dark">
      <Container className='pt-3 pb-3'>
        <Navbar.Brand href={'/'} className='brand me-5'>MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href={'/'} className={`me-2 ${location.pathname == "/" ? ("active") : ("")}`}>Home</Nav.Link>
            <Nav.Link href={'/list'} className={`me-2 ${location.pathname == "/list" ? ("active") : ("")}`}>List Movie</Nav.Link>
          </Nav>
          {location.pathname == '/' || location.pathname == '/list' ? (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Movie"
                className="me-2 search"
                aria-label="Search"
                onChange={({target}) => {search(target.value)}}
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>) :
            (<div></div>)
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = state => {
  return {
      moviesData: state.movie
  } 
}

const mapDispatchToProps = dispatch => {
  return {
      fetchMoviesSearch: (search) => { dispatch(fetchMoviesSearch(search)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar)