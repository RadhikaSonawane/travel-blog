import React from 'react';
import './Features.css';
import Media from '../services/Media';
import Helper from '../services/Helper'

class Features extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
     
      }
    }
    componentDidMount() {
      this.fetchPosts();
    }

    fetchPosts(){
        let projectsURL =  Helper.fetchUrl()+"/wp-json/wp/v2/feature";
        fetch(projectsURL)
        .then(response => response.json())
        .then(response =>{
          this.managePosts(response);
        }).catch((err)=>{
        })
      }
      managePosts(posts){
        var promises = [];
        for(var i = 0; i < posts.length; i++){
          promises.push(Media.fetchMedia(posts[i].featured_media));
        }
        var that = this;
        Promise.all(promises).then(function(values) {
          for(var i = 0; i < posts.length; i++){
            posts[i].media = values[i];
          }
          that.setState({
            posts: posts
          })
        });
      }
      render(){
        var Items = this.state.posts.map((post,index) =>
          <div key={index} className="travel-content">
            {post.media.media_details?<img className="symbol" src={post.media.source_url}/>:null}
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </div>
        );
        return Items;
      }
        
    }
    export default Features;