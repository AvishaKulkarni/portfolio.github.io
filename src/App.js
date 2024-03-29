// import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Linkedin from "./assets/images/linkedinIcon.png";
import Github from "./assets/images/githubIcon.png";
import Instagram from "./assets/images/instagramIcon.png";
import email from "./assets/images/emailIcon.gif";
import twitter from "./assets/images/xIcon.png";

// import { useNavigate } from 'react-router-dom';

function App() {
  // const navigate = useNavigate();

  // const LinkedinPage = () => {
   
  //  navigate.push('https://www.linkedin.com/in/avisha-kulkarni-5a1b1584/');
  // };
  // const InstagramPage = () => {
    
  //   navigate.push('/social-media-page');
  // };
  // const twitterPage = () => {
   
  //   navigate.push('https://twitter.com/swanera20');
  // };
  // const githubPage = () => {
    
  //   navigate.push('https://github.com/AvishaKulkarni');
  // };
  
  
  

  return (

    <div className="App">
    
      <header className="App-header">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
            </div>
          </nav>
        </div>
     
      
      </header>
      <LandingPage/>
      <About/>
      <Contact/>
      <footer>
        <div className='socialaccounts'>
        <a href="https://www.linkedin.com/in/avisha-kulkarni-5a1b1584/"><img  src={Linkedin} alt='Linkedin' width="3%"/></a>
        <a href="https://www.instagram.com/avisha_kulkarni/"><img  src={Instagram} alt='Instagram' width="3%"/></a>
        <a href="https://github.com/AvishaKulkarni"><img  src={Github} alt="github" width="3%"/></a>
        <a href="https://twitter.com/swanera20"><img  src={twitter} alt="twitter" width="3%"/></a>
        <img  src={email} alt="emailID" width="3%"/>
        </div>
        
      </footer>
   
    </div>
  );
}

export default App;
