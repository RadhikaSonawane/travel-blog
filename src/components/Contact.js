import React from 'react';
import './Contact.css';
import Helper from '../services/Helper'

class Contact extends React.Component {
    constructor(props){
      super(props);
      this.state = {
       form : {},
       contactform:{name:"", subject:"", email:"", message:""}
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      fetch(Helper.fetchUrl()+`/wp-json/t-for-contact/v1/contact-forms`)
      .then(response => response.json()
      ).then(contact =>{
        this.handleContactForm(contact);
      })
    }
    fetchContactId(contactid){
      var promise = new Promise(function(resolve, reject) {
        if(contactid === 0){
          resolve({})
        } else {
            let projectsURL = Helper.fetchUrl()+`/wp-json/t-for-contact/v1/contact-forms/${contactid}`;
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

    handleChange(event) {
        var form = this.state.contactform;
        form[event.target.name] = event.target.value;
        this.setState({contactform: form});
      }
    
    handleSubmit(event) {
        event.preventDefault();  
        let formData = new FormData();
        formData.append('your-name', this.state.contactform.name);
        formData.append('your-email', this.state.contactform.email);
        formData.append('your-subject', this.state.contactform.subject);        
        formData.append('your-message', this.state.contactform.message);

          fetch(Helper.fetchUrl()+"/wp-json/contact-form-7/v1/contact-forms/"+this.state.form.id+"/feedback", {
                method: 'POST',
                body: formData
              })
            .then(response => response.json()
            ).then(response =>{
                alert('A name was submitted: ' + this.state.value);
                this.setState({
                    contactform:{name:"", subject:"", email:"", message:""}
                  });
            }).catch(err => {
            })
      }
    handleContactForm(contact){
        this.fetchContactId(contact[0].id).then((form)=>{
           this.setState({ form })
         })
       }
      render(){
       return(
           <form id="contact-form" onSubmit={this.handleSubmit}>
            <div className="contact-head">
                      <h5 className="text-uppercase font-weight-bold  text-center contact-title">Contact Us</h5>
                  </div> 
              <div className="messages"></div>
              <div className="controls">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="form-group">
                              <label>Firstname *</label>
                              <input id="form_name" type="text" onChange={this.handleChange} value={this.state.contactform.name} name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."  />
                              <div className="help-block with-errors"></div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="form-group">
                              <label>Email *</label>
                              <input id="form_email" type="email" onChange={this.handleChange} value={this.state.contactform.email} name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                              <div className="help-block with-errors"></div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="form-group">
                              <label>Subject *</label>
                              <input id="form_subject" onChange={this.handleChange} value={this.state.contactform.subject} type="text" name="subject" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                              <div className="help-block with-errors"></div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="form-group">
                              <label>Message *</label>
                              <textarea id="form_message" onChange={this.handleChange} value={this.state.contactform.message} name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                              <div className="help-block with-errors"></div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <input type="submit" className="btn btn-danger btn-send" value="Send message"/>
                      </div>
                  </div>
              </div>
        </form>
       )
      }    
    }
    export default Contact;