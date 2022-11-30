import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMoviesSearch } from '../redux'
import { Card } from './Card'

function Search({moviesData, fetchMoviesSearch}) {
  return (
    <div className='new-release'>
        <h1 className='text-white mt-5 mb-4'>List of '{moviesData.search}'</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)