import React from 'react';
import './Categories.css';
import Media from '../services/Media';
import Fields from './Field-group';
import Helper from '../services/Helper'

class Categorie extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
     
      }
    }
    componentDidMount() {
      fetch(Helper.fetchUrl()+`/wp-json/wp/v2/travel-categorie?slug=`+this.props.categorieSlug)
      .then(response => response.json()
      ).then(categorie =>{
        this.handleCategorie(categorie);
      })
    }
    fetchCategorieId(categorieid){
      var promise = new Promise(function(resolve, reject) {
        if(categorieid === 0){
          resolve({})
        } else {
          let projectsURL = Helper.fetchUrl()+`/wp-json/wp/v2/travel-lover?travel-categorie=${categorieid}`;
          fetch(projectsURL)
          .then(response => response.json())
          .then(response =>{
            resolve(response);
          }).catch((err)=>{
            reject(err)
          })
      }
      });
      return promise;
    }
    handleCategorie(categorie){
      this.fetchCategorieId(categorie[0].id).then((posts)=>{
         var promises = [];
         for(var i = 0; i < posts.length; i++){
           promises.push(Media.fetchMedia(posts[i].featured_media));
         }
         var that = this;
         Promise.all(promises).then(function(values) {
           for(var i = 0; i < posts.length; i++){
             posts[i].media = values[i];
           }
         that.setState({ posts })
         })
       })
     }
 
     handlestyle(){
       if (this.props.categorieSlug === "travels") {
           return "col-md-4 all-con"
       } else if (this.props.categorieSlug === "features")  {
           return "col-md-6 feature-section"
       }else if (this.props.categorieSlug === "primary" || this.props.categorieSlug === "secondary") {
           return "col-md-12 col-sm-12 col-lg-12 main-text"
       }
     }
     
     render() {
       var Items = this.state.posts.map((post,index) =>
       <div key={index} className={this.handlestyle()}>
         <Fields name={post} categorieSlug={this.props.categorieSlug}/>
       </div>
      );
         return Items;
       }
     }
     export default Categorie;