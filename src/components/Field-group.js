import React from 'react';

class Fields extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
     
      }
    }

    handlestyle(){
        if (this.props.categorieSlug === "travels") {
            return "col-md-4"
        } else if (this.props.categorieSlug === "features")  {
            return "col-md-6"
        }else if (this.props.categorieSlug === "primary" || this.props.categorieSlug === "secondary") {
            return "col-md-10"
        }
    }

    handleHeading(){
        if (this.props.categorieSlug === "travels") {
            return <h4>{this.props.name.title.rendered}</h4>
        } else if (this.props.categorieSlug === "features")  {
            return <h4>{this.props.name.title.rendered}</h4>
        }else if (this.props.categorieSlug === "primary" || this.props.categorieSlug === "secondary") {
            return <h2>{this.props.name.title.rendered}</h2>
        }
    }

    render(){
        return (
            <div>
                {this.props.name.media.media_details?<img className="symbol" alt="feature-img" src={this.props.name.media.media_details.sizes.thumbnail.source_url}/>:null}
                {this.handleHeading()}
                <div dangerouslySetInnerHTML={{__html: this.props.name.excerpt.rendered}} />
            </div>
        );
      }
        
    }

    export default Fields;