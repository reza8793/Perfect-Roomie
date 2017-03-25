import React, { Component } from 'react';
import axios from "axios";
import styles from './matchPage.css';


const matchContainerDiv = {
  width: "700px",
  margin: "auto",
  fontFamily: "Helvetica"

};

const matchDiv = {
  width: "700px",
  margin: "auto",
  borderRadius:  8,
  borderWidth: 1,
  padding: 5,
  backgroundColor: "white",
  textAlign: "left",
  fontFamily: "Helvetica"

};


const h1style = {
  color:"white",
  fontFamily: "Helvetica"

};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
}

 componentDidMount() {
    axios.get("/db/getRoomieMatch")
      .then((data) => {
        console.log("data from roomiematch is  " , data);
//        console.log("data", data.data[0].roommateMatches);
//        console.log("data name is ", data.data[0].roommateMatches[0].FBName);
//        console.log("age is ", data.data[0].roommateMatches[0].age);
//        console.log("photo link ", data.data[0].roommateMatches[0].photolink);

        this.setState({users: data.data[0]._id});
        this.setState({userName: data.data[0].roommateMatches[0].FBName});
        this.setState({userScore: data.data[0].roommateMatches[0].diffScore});
        this.setState({userID: data.data[0].roommateMatches[0].userID});
        this.setState({photolink: data.data[0].roommateMatches[0].photolink});
        this.setState({age: data.data[0].roommateMatches[0].age});
        this.setState({mutualFriends: data.data[0].roommateMatches[0].mutualFriends});

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

        <div style= {matchContainerDiv}>

        <h1 style = {h1style} > Roommate Matches </h1>

        <div style= {matchDiv}>

        <p> Photolink: {this.state.photolink}</p>
        <h2> Name: {this.state.userName}</h2>
        <h3> Age: {this.state.age} </h3>
        <h3> Match %: {this.state.userScore} %</h3>>
        <h3> Mutual Friends : {this.state.mutualFriends}</h3>
{/*        <p> Match User ID: {this.state.userID}</p> */ }
         
        </div>

        </div>
    );
  }
}

export default Home;
