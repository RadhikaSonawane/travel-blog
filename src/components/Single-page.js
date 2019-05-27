import React from 'react';
import Media from '../services/Media';
import './Single-page.css';
import Helper from '../services/Helper';

 class Singlepage extends React.Component {
  
  constructor(){
    super();
    this.state = {
      post: {
              media:{},
              title:{},
              content:{}
            }
    }
  }
  
  componentDidMount () {
    const { id } = this.props.match.params
    fetch(Helper.fetchUrl()+`/wp-json/wp/v2/travel-lover/${id}`)
      .then(response => response.json()
      ).then(post =>{
        //this.handlePost(post);
        this.setState(() => ({ post }))
      })
  }

  componentDidUpdate(prevProps, prevState){
    const { id } = this.props.match.params
    const oldid  = prevProps.match.params.id 

    if(oldid !== id){
      fetch(Helper.fetchUrl()+`/wp-json/wp/v2/travel-lover/${id}`)
      .then(response => response.json()
      ).then(post =>{
        this.handlePost(post);
        //this.setState(() => ({ post }))
      })
    }
  }

  handlePost(post){
    var that = this;
    Media.fetchMedia(post.featured_media).then((image)=>{
      post.media = image;
      that.setState(() => ({ post }))
    })
  }

  renderImage(){
    if(this.state.post.featured_media){
        return (
            <img src={this.state.post.featured_media}
                alt={"feturedImage"} />
        )
    } else {
      return null;
    }
  }

  renderPost(){
    return ( 
    <div className="mb-4 content" >
      <h1>{this.state.post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}} />
     </div>
     );
  }

  render() {
    return(
      <div className="Container">
        <div className="img-fluid background" id="featuredimage">
        <div className=" main-image" alt="Responsive image">
          {this.renderImage()}
        </div>
        </div>
        <div className="" >
          {this.renderPost()}
        </div>
      </div>
    )
      
  }
}
export default Singlepage;