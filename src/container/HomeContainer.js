import React, { Component, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Navigationbar } from '../component/Navigationbar'
import { Footer } from '../component/Footer'
import './../asset/style.css'
import NewRelease from '../component/NewRelease'
import { connect } from 'react-redux'
import { fetchMovieLatest } from '../redux'
import Search from '../component/Search'
import Explore from '../component/Explore'

const HomeContainer = ({moviesData, fetchMovieLatest}) => {
  return (
    <div>
      {(moviesData.search) ? (<Container className='ps-5 pe-5 pb-5'>
        <Search/>
      </Container>) : (<Container className='ps-5 pe-5 pb-5'>
        <Explore/>
        <NewRelease/>
      </Container>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)