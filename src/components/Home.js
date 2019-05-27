import React from 'react';
import './Home.css';
import Categorie from './Categories';

class Home extends React.Component {
render() {
    return(
    <div>
        {/* First Container */}
        <div id="featuredimage" className="container-fluid img-fluid text-center main-img">
            <img src={require('../img/camper-campervan-car.jpg')} className="img-responsive margin" alt="Bird" width="100%"/> 
        </div>
        <div className="container">
            {/*Second Container */}
            <div className="container-fluid bg-2 main-content text-center img">
            <Categorie categorieSlug="primary"/>     
            </div>
            {/*Third Container (Grid)*/}
            <div className="container-fluid text bg-3 text-center">    
                    <div className="row">
                        <Categorie categorieSlug="features"/>
                    </div>
            </div>
            <div className="container-fluid bg-2 text-center function img">
            <Categorie categorieSlug="secondary"/>  
            </div>
             {/*Third Container (Grid)*/}
             <div className="container-fluid text bg-3 text-center">    
                    <div className="row">
                        <Categorie categorieSlug="travels"/>
                    </div>
                </div>
        </div>
    </div>
   
    )
      
  }
}
export default Home;
