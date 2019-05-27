import React from 'react';
import { Link } from 'react-router-dom';
import './Footer-menu.css';
import Helper from '../services/Helper';


 class FooterMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      menu: [],
    }
  }
  componentDidMount () {
    fetch(Helper.fetchUrl()+`/wp-json/menu/v1/footer-menu`)
      .then(response => response.json()
      ).then(menu =>{
       this.setState(() => ({ menu }))
      })
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () { 
    window.removeEventListener('scroll', this.handleScroll);
    } 

 renderMenu(){
  var listItems = this.state.menu.map((item, index) =>
  <li key={index}><Link  to={"/page/"+item.object_id}>{item.title}</Link></li>
);
return listItems;
 }
  render() {
    return( 
        <div className=" navbar-expand-lg navbar-dark text-center navbar-inverse"> 
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="nav navbar-nav navbar-right footerbar" >
                {this.renderMenu()}
            </ul>
            </div>
        </div>
        </div>
    )
      
  }
}
export default FooterMenu;

