import React from 'react';
// importing components
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/index';
// Not Found Component

const NotFound = () => (
  <div>
     <nav className='navbar navbar-expand-lg navbar-expand-xl navbar-dark bg-danger fixed-top'>
              <div className='container'>
                <a className='navbar-brand' href='/#top'>
                    <img src='https://www.freepngimg.com/download/football/66114-soccer-photography-football-royalty-free-player-stock-playing.png' width='30' height='30' className='d-inline-block align-top' alt=''/>
                    Football
                </a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>
                </div>
              </nav>       
      <div className="col-12 text-center m-8 container-notFound">
          <h2>404</h2>
          <h2>PAGE NOT FOUND</h2>
          <p>URL is not valid.</p>
          <Link to="/">Go to Home</Link>
      </div>
      <Footer />
  </div>
);

export default NotFound;