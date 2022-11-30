import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTopMovie } from '../redux'
import fantasticFour from './../asset/images/fantastic-four.jpg'

const Explore = ({topMovieData, fetchTopMovie}) => {

  useEffect(() => {
    fetchTopMovie()
  }, [])

  return (
    <div className='explore'>
        <h1 className='text-light sub-title'>Explore</h1>
        <p>What are you gonna watch today ?</p>
        <Link to={`/detail/${topMovieData.movie.id}`}>
          <div className='image-explore'>
              <img src={`${process.env.REACT_APP_IMG_PATH}/${topMovieData.movie.poster_path}`} />
              <div className='shadow'></div>
              <div className='desc-explore'>
                  <h1 className='mb-4'>{topMovieData.movie.title}</h1>
                  <p>{typeof topMovieData.movie.overview == 'string' ? topMovieData.movie.overview.substring(0, 150) + '...' : ''}</p>
              </div>
          </div>
        </Link>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.topMovie)
  return {
      topMovieData: state.topMovie
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopMovie: () => { dispatch(fetchTopMovie()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)