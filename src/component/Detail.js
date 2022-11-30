import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../redux'
import onePiece from './../asset/images/one-piece.jpg'

const Detail = ({movieDetailData, fetchMovieDetail}) => {
  const param = useParams()

  useEffect(() => {
    fetchMovieDetail(param.id)
    // console.log(movieDetailData)
  }, [param])

  return (
    <div className='detail'>
        <h1 className='sub-title text-light'>{movieDetailData.movie.title}</h1>
        <div className='detail-desc pt-3 d-flex pe-5'>
            <img src={`${process.env.REACT_APP_IMG_PATH}/${movieDetailData.movie.poster_path}`} />
            <div className='description'>
                <h5>Status :</h5>
                <p>{movieDetailData.movie.status}</p>
                <h5>Popularity :</h5>
                <p>{movieDetailData.movie.popularity}</p>
                <h5>Studios :</h5>
                <p>
                    {movieDetailData.movie.production_companies && movieDetailData.movie.production_companies.map((p, index) => {
                      if(index + 1 == movieDetailData.movie.production_companies.length){
                        return (
                          <span key={index}>
                            {p.name}
                          </span>
                        )
                      }
                      else{
                        return (
                          <span className='me-1' key={index}>
                            {p.name},
                          </span>
                        )
                      }
                    })}
                </p>
                <h5>Genres :</h5>
                <p>
                    {movieDetailData.movie.genres && movieDetailData.movie.genres.map((g, index) => {
                      if(index + 1 == movieDetailData.movie.genres.length){
                        return (
                          <span key={index}>
                            {g.name}
                          </span>
                        )
                      }
                      else{
                        return (
                          <span className='me-1' key={index}>
                            {g.name},
                          </span>
                        )
                      }
                    })}
                </p>
            </div>
        </div>
        <div className='synopsis'>
            <h4 className='text-light'>Synopsis :</h4>
            <p>
            {movieDetailData.movie.overview}
            </p>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movieDetailData: state.movieDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchMovieDetail: (id) => { dispatch(fetchMovieDetail(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)