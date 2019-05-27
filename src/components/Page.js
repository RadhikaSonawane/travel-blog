import React from 'react';
import Media from '../services/Media';
import './Page.css';
import Helper from '../services/Helper';

 class Page extends React.Component {
  
  constructor(){
    super();
    this.state = {
      page: {
              media:{},
              title:{},
              content:{}
            }
         }
  }
  
  componentDidMount () {
    const { id } = this.props.match.params
    fetch(Helper.fetchUrl()+`/wp-json/wp/v2/pages/${id}`)
      .then(response => response.json()
      ).then(page =>{
        this.handlePage(page);
        //this.setState(() => ({ page }))
      })
  }

  componentDidUpdate(prevProps, prevState){
    const { id } = this.props.match.params
    const oldid  = prevProps.match.params.id 
    if(oldid !== id){
      fetch(Helper.fetchUrl()+`/wp-json/wp/v2/pages/${id}`)
      .then(response => response.json()
      ).then(page =>{
        this.handlePage(page);
        //this.setState(() => ({ page }))
      })
    }
    }

  handlePage(page){
    var that = this;
    Media.fetchMedia(page.featured_media).then((image)=>{
      page.media = image;
      that.setState(() => ({ page }))
    })
  }

  renderImage(){
    if(this.state.page.media.source_url){
        return (
            <img src={this.state.page.media.source_url}
            className="img-responsive margin" width="100%" alt={"feturedImage"} />
        )
    } else {
      return null;
    }
  }

  renderPage(){
    return ( 
    <div className="mb-4 content" >
      <h1>{this.state.page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{__html: this.state.page.content.rendered}} />
     </div>
     );
  }

  render() {
    return(
      <div className="Container text-center">
        <div className="img-fluid text-center background" id="featuredimage">
        <div className="container-fluid main-image text-center img-fluid main-img" alt="Responsive image">
          {this.renderImage()}
        </div>
        </div>
        <div className="page" >
          {this.renderPage()}
        </div>
        <div>
        </div>
      </div>
    )
      
  }
}
export default Page;