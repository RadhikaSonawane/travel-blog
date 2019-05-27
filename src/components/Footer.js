import React from 'react';
import './Footer.css';
import FooterMenu from './Footer-menu';
import Contact from './Contact';

class Footer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          footer: [],
        }
      }
      render() {
        return( 
        <div>
{/*Footer*/ }
        <footer className="footer-one page-footer font-small teal pt-4">
            {/*Footer Text*/}
            <div className="container footer-group text-center text-md-left">
                {/*Grid row*/ }
                <div className="row">
                    {/*Grid column */ }
                    <div className="col-md-6 mt-md-0 mt-3">
                       <h2>CONNECT WITH US</h2>  
                       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>      
                    </div>
                    {/* Grid column */ }
                    <div className="col-md-6 mt-md-0 mt-3" >
                        <Contact/>
                    </div>
                </div>
                {/*Grid row*/ }
            </div>
            {/*Footer Text*/ }
        </footer>
        {/*Footer*/ }
        {/*Footer 2*/ }
        <footer className="share-footer footer-two font-small teal p-4">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center ">
                    <FooterMenu/>
                    </div>
                    </div>
                </div>
            </footer>
        {/*Footer 2*/ }
    </div>
        )
      }
}


export default Footer;