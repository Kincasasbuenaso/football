import React, { Component } from 'react';
import './styles.css';

// importing components
import Footer from '../../components/Footer/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      football: [],
      error: false,
    };
  };

  async componentDidMount() {

    const isConnected = true;

    if (isConnected) {
      await this.fetchDataFootball();
    }

    if(this.state.football.length == 0){
      console.log('Red is not active');
      try{
        this.setState({football: JSON.parse(localStorage.getItem('dataf')) });
        console.log('Get data from localStorage');
      }catch (error) {
        console.log(error);
      }
    }
  }


  componentWillMount(){
  }


  // Fetch Data Football
  fetchDataFootball() {
    let body={"graphType":"metadata"};
    
    return fetch('https://crmwinapi.azurewebsites.net/',{
          method: 'POST',
          body: JSON.stringify(body),
          headers:{
            'Content-Type': 'application/json'
          }
        })
      .then(response => response.json())
      .then( async data => {
        await this.setState({ football: data });
        localStorage.setItem('dataf',JSON.stringify(data));
        this.setState({loading: false, error: false});
      })
      .catch(function(error) {
          console.log('Error: '+error.message);
      });
  }

  // Render
 render() {
  const { premiere,trending, genres, loading, football, error } = this.state;
    return (
      <div className='Home'>
        <div className='container-flex'>
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
            <div className='col-12 anchor' id='trend'>
                <h1>Table of Products</h1>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-12 col-sm-12 col-xs-12'>
                    <table className='table table-striped table-dark'>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                            {!loading && football.filter(data => data.fiterType === "product").map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.fiterType}</td>
                                    <td>{item.desc}</td>
                                </tr>
                            ))}
                            {!loading &&  !football.length && <tr> <td colspan='3'>Cargando información ...</td></tr>}
                            {loading && !error && !football.length && <tr> <td colspan='3'> No hay información disponible</td></tr>}
                            {!loading && error && <tr> <td colspan='3'> Ocurrió un error.</td></tr> }
                      </tbody>
                    </table>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
        <Footer />   
      </div>
    );
  }
};
export default Home;

