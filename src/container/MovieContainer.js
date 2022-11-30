import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Detail from '../component/Detail'
import Popular from '../component/Popular'
import Search from '../component/Search'
import { fetchMovieLatest } from '../redux'

const MovieContainer = ({moviesData, fetchMovieLatest}) => {
  const params = useParams()

  return (
    <div className='detailMovie'>
      <Container className='ps-5 pe-5 pb-5 d-flex'>
         <Detail/>
         <Popular/>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
