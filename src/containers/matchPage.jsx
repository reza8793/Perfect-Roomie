import React, { Component } from 'react';
import axios from "axios";
import styles from './matchPage.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
}

 componentDidMount() {
    axios.get("/db/roomieMatch")
      .then((data) => {
        console.log("data from roomiematch is  " , data);
        console.log("data", data.data[0].roommateMatches);
        console.log("data", data.data[0].roommateMatches[0].FBName);
        this.setState({users: data.data[0]._id})
        this.setState({userName: data.data[0].roommateMatches[0].FBName})
        this.setState({userScore: data.data[0].roommateMatches[0].diffScore})
        this.setState({userID: data.data[0].roommateMatches[0].userID})
      })
}


//  componentDidMount() {
//     axios.get("/db/roomieMatch1")
//       .then((data) => {
//         console.log("data from roomieMatch1 is  " , data);
//         console.log("age is ", data.data[0].roommateMatches[0].age);
//         console.log("photo link ", data.data[0].roommateMatches[0].photolink);
//         this.setState({age: data.data[0].roommateMatches[0].age})
//         this.setState({photolink: data.data[0].roommateMatches[0].photolink})
        
//       })
// }






  
  render() {

      console.log(this.state.users);
    return (
        <div className = {styles.matchDiv1}>


        <p> Photolink: {this.state.photolink}</p>
        <p> Name: {this.state.userName}</p>
        <p> Age: {this.state.age}</p>
        <p> Match %: {this.state.userScore} %</p>
        <p> Mutual Friends : {this.state.userID}</p>
        <p> Match User ID: {this.state.userID}</p>
  
         
        </div>
    );
  }
}

export default Home;
