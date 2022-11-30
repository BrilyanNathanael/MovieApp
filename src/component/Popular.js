import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchMoviesPopular } from '../redux'
import onePiece from './../asset/images/one-piece.jpg'

const Popular = ({moviePopularData, fetchMoviesPopular}) => {

  const params = useParams();

  useEffect(() => {
    fetchMoviesPopular()
  }, [params])

  return (
    <div className='popular-container'>
        <h1 className='sub-title text-light'>Popular</h1>
        <div className='populars d-flex flex-wrap'>
          {moviePopularData.movies.map((movie, index) => {
            if(index <= 3){
              return (
                <Link to={`/detail/${movie.id}`} key={movie.id} onClick={fetch}>
                  <img src={`${process.env.REACT_APP_IMG_PATH}/${movie.poster_path}`} className='me-2 mb-2'/>
                </Link>
              )
            }
          })}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    moviePopularData: state.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviesPopular: () => {dispatch(fetchMoviesPopular())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)
