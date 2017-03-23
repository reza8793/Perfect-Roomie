import React, { Component } from 'react';
import FormContainer from './FormContainer.jsx';


//<div className={`container ${styles.appContent}`}>

class Home extends Component {
  render() {
    return (
      <div className={`container`}>
        <div className="columns">
          <div className="col-md-9">
            <span><strong>"1 = Strongly Disagree, 5 = Strongly Agree"</strong></span>
            <br />
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
