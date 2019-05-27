import React from 'react';
import Media from '../services/Media';
import Helper from '../services/Helper';

 class Post extends React.Component {
  
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
    const { slug } = this.props.match.params
    fetch(Helper.fetchUrl()+`/wp-json/wp/v2/posts/${slug}`)
      .then(response => response.json()
      ).then(post =>{
        //this.handlePage(post);
        this.setState(() => ({ post }))
      })
  }

  componentDidUpdate(prevProps, prevState){
    const { slug } = this.props.match.params
    const oldslug  = prevProps.match.params.id 
    if(oldslug !== slug){
      fetch(Helper.fetchUrl()+`/wp-json/wp/v2/post/${slug}`)
      .then(response => response.json()
      ).then(post =>{
        //this.handlePost(post[0]);
        this.setState(() => ({ post }))
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
            <img src={this.state.post.media.source_url}
                alt={"feturedImage"} />
        )
    } else {
      return null;
    }
  }

  render() {

    return(
      <div className="Container text-center">
        <div className="img-fluid text-center background" id="featuredimage">
            <div className=" main-image text-center" alt="Responsive image">
             {this.renderImage()}
            </div>
        </div>
      </div>
    )
      
  }
}
export default Post;