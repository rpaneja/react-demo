import React from 'react';

import {Modal} from '../Modal/Modal.js';
import './MainNavigation.css';



export class SubMenu extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('onMouseEnter', this.closeMenu);
    });
  }
  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('onMouseEnter', this.closeMenu);
    });
    
  }
  render() {
    return (
      <div onMouseEnter={this.showMenu} onMouseLeave={this.closeMenu}>
        <button>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
    }
  }
  handleModalShowClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    })
  }
  // showAlert() {
  //   alert("an alert");
  // }
  render() {
    // console.log(this.state)
    const { showModal } = this.state;
    const pages = ['Home', 'About', 'Service', 'about', 'contact'];
    const loginPages = ['Login', 'Sign Up'];
    const aboutInner = ['why us', 'who we are', 'lore ipsum'];
    const navLinks = pages.map((page, index) => {
      return (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={'/' + page}>
            {page}
          </a>
        </li>
      )
    });
    const loginLinks = loginPages.map((loginPage, index)=>{
      return(
        <li key={index}>
          <a className="nav-link" href={'/'+loginPage}>
            {loginPage}
          </a>
        </li>
      )
    })
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-survival101 mainNavigation">
          <a className="navbar-brand" href="#">WebSiteName</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarsExample03">
            <ul className="navbar-nav mr-auto">
            	{navLinks}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {loginLinks}
            </ul>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleModalShowClick}>Show Modal</button>
          {showModal ? (<Modal handleModalCloseClick={this.handleModalCloseClick} />) : null}
        </nav>
        <SubMenu />
      </div>
    )
    
  }
}