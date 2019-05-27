import Helper from './Helper';

const Media = {
  fetchMedia:function(mediaid){
    var promise = new Promise(function(resolve, reject) {
      if(mediaid === 0){
        resolve({})
      } else {
          let projectsURL =Helper.fetchUrl()+ "/wp-json/wp/v2/media/"+mediaid;
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
}
    
 export default Media;