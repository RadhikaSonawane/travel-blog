import React  from 'react';
import SinglePage from './Page';

class Route extends React.Component {
    state = {
      page: null
    }
    componentDidMount () {

    }
    render() {
      return(
        <Route path='/:id' component={SinglePage} />
      )
    }
  }
  export default Route;