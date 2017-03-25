import React, { Component } from 'react';
import FormContainer from './FormContainer.jsx';
import styles from "./Survey.css";


const containerDiv = {
  width: "800px"

};

class Home extends Component {
  render() {
    return (
      <div style = {containerDiv}  className={`container`}>
        <div className="columns">
          <div className="col-md-6">
              <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
