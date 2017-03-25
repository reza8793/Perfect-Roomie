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

        this.setState({data: data.data[0].roommateMatches});
        this.setState({users: data.data[0]._id});
        this.setState({userName0: data.data[0].roommateMatches[0].FBName});
        this.setState({userScore0: data.data[0].roommateMatches[0].diffScore});
        this.setState({userID0: data.data[0].roommateMatches[0].userID});
        this.setState({photolink0: data.data[0].roommateMatches[0].photolink});
        this.setState({age0: data.data[0].roommateMatches[0].age});
        this.setState({mutualFriends00: data.data[0].roommateMatches[0].mutualFriends[0]});
        this.setState({mutualFriends01: data.data[0].roommateMatches[0].mutualFriends[1]});


        this.setState({userName1: data.data[0].roommateMatches[1].FBName});
        this.setState({userScore1: data.data[0].roommateMatches[1].diffScore});
        this.setState({userID1: data.data[0].roommateMatches[1].userID});
        this.setState({photolink1: data.data[0].roommateMatches[1].photolink});
        this.setState({age1: data.data[0].roommateMatches[1].age});
        this.setState({mutualFriends1: data.data[0].roommateMatches[1].mutualFriends[0]});

        this.setState({userName2: data.data[0].roommateMatches[2].FBName});
        this.setState({userScore2: data.data[0].roommateMatches[2].diffScore});
        this.setState({userID2: data.data[0].roommateMatches[2].userID});
        this.setState({photolink2: data.data[0].roommateMatches[2].photolink});
        this.setState({age2: data.data[0].roommateMatches[2].age});
        this.setState({mutualFriends2: data.data[0].roommateMatches[2].mutualFriends[0]});


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

            <img src={this.state.photolink0} />

{/*         <p> Photolink: {this.state.photolink}</p> */}
        
            <h2> Name: {this.state.userName0}</h2>
            <h3> Age: {this.state.age0} </h3>
            <h3> Match %: {100 - this.state.userScore0 } %</h3>
            <h3> Mutual Friends : {this.state.mutualFriends00}</h3>

{/*        <p> Match User ID: {this.state.userID}</p> */ }
          </div>

        <div style= {matchDiv}>

          <img src={this.state.photolink1} />

{/*        <p> Photolink: {this.state.photolink}</p> */}
        
          <h2> Name: {this.state.userName1}</h2>
          <h3> Age: {this.state.age1} </h3>
          <h3> Match %: {100 - this.state.userScore1 } %</h3>
          <h3> Mutual Friends : {this.state.mutualFriends1}</h3>
{/*        <p> Match User ID: {this.state.userID}</p> */ }
         
        </div>

        <div style= {matchDiv}>

          <img src={this.state.photolink2} />

{/*        <p> Photolink: {this.state.photolink}</p> */}
        
          <h2> Name: {this.state.userName2}</h2>
          <h3> Age: {this.state.age2} </h3>
          <h3> Match %: {100 - this.state.userScore2 } %</h3>
          <h3> Mutual Friends : {this.state.mutualFriends2}</h3>
{/*        <p> Match User ID: {this.state.userID}</p> */ }
         
        </div>



      </div>
    );
  }
}

export default Home;
