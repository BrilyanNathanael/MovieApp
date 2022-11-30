import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import facebookIcon from './../asset/images/facebook-icon.png'
import instagramIcon from './../asset/images/instagram-icon.png'
import youtubeIcon from './../asset/images/youtube-icon.png'

export const Footer = () => {
  return (
    <footer className='pt-5'>
      <Container className='d-flex justify-content-around align-items-center'>
        <div className='foot-nav'>
          <div className='soc-med'>
            <a href='https://www.facebook.com/'>
              <img src={facebookIcon} className="me-3" />
            </a>
            <a href='https://www.instagram.com/'>
              <img src={instagramIcon} className="me-3" />
            </a>
            <a href='https://www.youtube.com/'>
              <img src={youtubeIcon} className="me-3" />
            </a>
          </div>
          <div className='nav mt-3'>
            <Link to={'/'} className='me-5'>Home</Link>
            <Link to={'/'}>List Movie</Link>
          </div>
          <p className='mt-3'>&copy; 2022 Brilyan Nathanael Rumahorbo</p>
        </div>
        <Link to={'/'} className='text-decoration-none'>
          <h1 className='text-light brand-footer'>MovieApp</h1>
        </Link>
      </Container>
    </footer>
  )
}
