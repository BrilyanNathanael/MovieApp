import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMovieLatest } from './../redux'
import { Card } from './Card'

function NewRelease ({moviesData, fetchMovieLatest}) {

    useEffect(() => {
        fetchMovieLatest()
    }, [moviesData.search])

  return (
    <div className='new-release'>
        <h1 className='text-light sub-title mt-5 mb-4'>New Release</h1>
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
        fetchMovieLatest: () => { dispatch(fetchMovieLatest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRelease)
