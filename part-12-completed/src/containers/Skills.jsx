import React, { Component } from 'react';
import FormContainer from './FormContainer';


class Home extends Component {  
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9">
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home; 