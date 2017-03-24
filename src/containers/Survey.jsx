import React, { Component } from 'react';
import FormContainer from './FormContainer.jsx';
import styles from "./Survey.css";


//<div className={`container ${styles.appContent}`}>

class Home extends Component {
  render() {
    return (
      <div className={`container`}>
        <div className="columns">
          <div className="col-md-9">
            <div className= {styles.formDiv}>
              <FormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
