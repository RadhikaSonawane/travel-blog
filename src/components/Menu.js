import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Helper from '../services/Helper';

 class Menu extends React.Component {
  constructor(){
    super();
    this.state = {
      menu: [],
    }
  }
  componentDidMount () {
    fetch(Helper.fetchUrl()+`/wp-json/menu/v1/main-menu`)
      .then(response => response.json()
      ).then(menu =>{
       this.setState(() => ({ menu }))
      })
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () { 
    window.removeEventListener('scroll', this.handleScroll);
    } 

  handleScroll(event) {
        let mainNavbarPosition = document.getElementById("featuredimage").getBoundingClientRect();
        if (mainNavbarPosition.bottom < 0) {
            document.getElementById("transparantMenu").classList.add('nonTransparantMenu');
            document.getElementById("transparantMenu").classList.remove('transparantMenu');

        } else {
          document.getElementById("transparantMenu").classList.add('transparantMenu');
            document.getElementById("transparantMenu").classList.remove('nonTransparantMenu');
        }
    }
  
 renderMenu(){
      var listItems = this.state.menu.map((item, index) =>
      <li key={index}><Link  to={"/page/"+item.object_id}>{item.title}</Link></li>
    );
    return listItems;
  }
  render() {
    return( 
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-inverse transparantMenu" id="transparantMenu">
        <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img src={require('../img/mercedes-logo.jpg')} className="d-inline-block align-top" alt=""/>
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown1">
              <ul className="nav navbar-nav navbar-right" >
                {this.renderMenu()}
              </ul>
            </div>
        </div>
       </nav>
    )
      
  }
}
export default Menu;