import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from '../component/Card'
import { fetchListMovies } from '../redux'

const ListMovieContainer = ({moviesData, fetchListMovies}) => {

    useEffect(() => {
        fetchListMovies()
    }, [])

  return (
    <Container>
    <div className='ps-4 pe-4'>
        <h1 className='text-white mt-5 mb-4'>List of {(moviesData.search && moviesData.search !== '') ? (`'${moviesData.search}'`) : 'Movies'}</h1>
        <Row>
            {moviesData.movies.map((movie) => {
                return (
                    <Col className='mb-4 movie' key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <Card movie={movie}/>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    </div>
    </Container>
  )
}

const mapStateToProps = state => {
    return {
        moviesData: state.movie.search == '' ? state.listMovie : state.movie
    } 
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchListMovies: () => { dispatch(fetchListMovies()) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieContainer)