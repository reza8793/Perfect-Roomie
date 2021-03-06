import React, {Component} from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import Select from '../components/Select';
import styles from "./Survey.css";
import helper from '../components/utils/helper.js';
import { hashHistory} from 'react-router';
import { browserHistory } from 'react-router';


const surveyDiv = {

  color : "white",
  textAlign: "center",
  backgroundColor: "#44c767",
  borderRadius:  8,
  borderWidth: 1,
  padding: 5,
  width:"790px",
  margin:"auto",
  fontFamily: "Helvetica"
  
}

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: ["18-23","23-27","27-31","31-35","35-45","45 and above"],
      AgeRangeSelection: '',
      answerOptions1: ["1","2","3","4","5"],
      answerSelection1: [],

      answerOptions2: ["1","2","3","4","5"],
      answerSelection2: [],

      answerOptions3: ["1","2","3","4","5"],
      answerSelection3: [],

      answerOptions4: ["1","2","3","4","5"],
      answerSelection4: [],

      answerOptions5: ["1","2","3","4","5"],
      answerSelection5: [],

      answerOptions6: ["1","2","3","4","5"],
      answerSelection6: [],

      answerOptions7: ["1","2","3","4","5"],
      answerSelection7: [],

      answerOptions8: ["1","2","3","4","5"],
      answerSelection8: [],

      answerOptions9: ["1","2","3","4","5"],
      answerSelection9: [],

      answerOptions10: ["1","2","3","4","5"],
      answerSelection10: [],

      answerOptions11: ["1","2","3","4","5"],
      answerSelection11: [],

      answerOptions12: ["1","2","3","4","5"],
      answerSelection12: [],

      answerOptions13: ["1","2","3","4","5"],
      answerSelection13: []


    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
    this.handleAnswersSelection1 = this.handleAnswersSelection1.bind(this);
    this.handleAnswersSelection2 = this.handleAnswersSelection2.bind(this);
    this.handleAnswersSelection3 = this.handleAnswersSelection3.bind(this);
    this.handleAnswersSelection4 = this.handleAnswersSelection4.bind(this);
    this.handleAnswersSelection5 = this.handleAnswersSelection5.bind(this);
    this.handleAnswersSelection6 = this.handleAnswersSelection6.bind(this);
    this.handleAnswersSelection7 = this.handleAnswersSelection7.bind(this);
    this.handleAnswersSelection8 = this.handleAnswersSelection8.bind(this);
    this.handleAnswersSelection9 = this.handleAnswersSelection9.bind(this);
    this.handleAnswersSelection10 = this.handleAnswersSelection10.bind(this);
    this.handleAnswersSelection11 = this.handleAnswersSelection11.bind(this);
    this.handleAnswersSelection12 = this.handleAnswersSelection12.bind(this);
    this.handleAnswersSelection13 = this.handleAnswersSelection13.bind(this);

  }
  componentDidMount() {
      (data => {
        this.setState({
          Name: data.Name,
          Age: data.Age,
          AgeRangeSelection: data.AgeRangeSelection,

          answerOptions1: data.answerOptions1,
          answerSelection1: data.answerSelection1,

          answerOptions2: data.answerOptions2,
          answerSelection2: data.answerSelection2,

          answerOptions3: data.answerOptions3,
          answerSelection3: data.answerSelection3,

          answerOptions4: data.answerOptions4,
          answerSelection4: data.answerSelection4,

          answerOptions5: data.answerOptions5,
          answerSelection5: data.answerSelection5,

          answerOptions6: data.answerOptions6,
          answerSelection6: data.answerSelection6,

          answerOptions7: data.answerOptions7,
          answerSelection7: data.answerSelection7,

          answerOptions8: data.answerOptions8,
          answerSelection8: data.answerSelection8,

          answerOptions9: data.answerOptions9,
          answerSelection9: data.answerSelection9,

          answerOptions10: data.answerOptions10,
          answerSelection10: data.answerSelection10,

          answerOptions11: data.answerOptions11,
          answerSelection11: data.answerSelection11,

          answerOptions12: data.answerOptions12,
          answerSelection12: data.answerSelection12,

          answerOptions13: data.answerOptions13,
          answerSelection13: data.answerSelection13



        });
      });
  }
  handleFullNameChange(e) {
    this.setState({ Name: e.target.value }, () => console.log('name:', this.state.Name));
  }
  handleAgeRangeSelect(e) {
    this.setState({ AgeRangeSelection: e.target.value }, () => console.log('age range', this.state.AgeRangeSelection));
  }

  handleAnswersSelection1(e) {
    this.setState({ answerSelection1: [e.target.value] }, () => console.log('q1', this.state.answerSelection1));
  }

    handleAnswersSelection2(e) {
    this.setState({ answerSelection2: [e.target.value] }, () => console.log('q2', this.state.answerSelection2));
  }

   handleAnswersSelection3(e) {
    this.setState({ answerSelection3: [e.target.value] }, () => console.log('q3', this.state.answerSelection3));
  }

   handleAnswersSelection4(e) {
    this.setState({ answerSelection4: [e.target.value] }, () => console.log('q4', this.state.answerSelection4));
  }

   handleAnswersSelection5(e) {
    this.setState({ answerSelection5: [e.target.value] }, () => console.log('q5', this.state.answerSelection5));
  }

   handleAnswersSelection6(e) {
    this.setState({ answerSelection6: [e.target.value] }, () => console.log('q6', this.state.answerSelection6));
  }

   handleAnswersSelection7(e) {
    this.setState({ answerSelection7: [e.target.value] }, () => console.log('q7', this.state.answerSelection7));
  }

   handleAnswersSelection8(e) {
    this.setState({ answerSelection8: [e.target.value] }, () => console.log('q8', this.state.answerSelection8));
  }

   handleAnswersSelection9(e) {
    this.setState({ answerSelection9: [e.target.value] }, () => console.log('q9', this.state.answerSelection9));
  }

   handleAnswersSelection10(e) {
    this.setState({ answerSelection10: [e.target.value] }, () => console.log('q10', this.state.answerSelection10));
  }

  handleAnswersSelection11(e) {
    this.setState({ answerSelection11: [e.target.value] }, () => console.log('q11', this.state.answerSelection11));
  }

  handleAnswersSelection12(e) {
    this.setState({ answerSelection12: [e.target.value] }, () => console.log('q12', this.state.answerSelection12));
  }

  handleAnswersSelection13(e) {
    this.setState({ answerSelection13: [e.target.value] }, () => console.log('q13', this.state.answerSelection13));
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      Name: '',
      AgeRangeSelection: '',
      answerSelectionall: []
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      Name: this.state.Name,
      AgeRangeSelection: this.state.AgeRangeSelection,
      answerSelectionall: [this.state.answerSelection1,this.state.answerSelection2,
                          this.state.answerSelection3,this.state.answerSelection4,
                          this.state.answerSelection5,this.state.answerSelection6,
                          this.state.answerSelection7,this.state.answerSelection8,
                          this.state.answerSelection9,this.state.answerSelection10,
                          this.state.answerSelection11,this.state.answerSelection12,
                          this.state.answerSelection13]

                                                        

    };

    var surveyArray = [this.state.answerSelection1,this.state.answerSelection2,
                          this.state.answerSelection3,this.state.answerSelection4,
                          this.state.answerSelection5,this.state.answerSelection6,
                          this.state.answerSelection7,this.state.answerSelection8,
                          this.state.answerSelection9,this.state.answerSelection10,
                          this.state.answerSelection11,this.state.answerSelection12,
                          this.state.answerSelection13

                          ];



    console.log("1st this is: " , this);
    console.log('Send this in a POST request:', formPayload);
    var that = this;
      //console.log('submitted to DB:', res);
      helper.postSurvey(surveyArray).then(function(res) {
        console.log('submitted to DB:', res);
      });
      
      console.log("Other this is: " , that);
      // console.log(user.livingStyle);
      that.handleClearForm(e);


    hashHistory.push('/matchPage');


    }



  
  render() {
    return (

     

      <form className={`container ${styles.formContent}`}onSubmit={this.handleFormSubmit}>


       <div style= {surveyDiv}>

       <h1 > Roomie Survey </h1> 

       <h3> 1 = Strongly Disagree, 5 = Strongly Agree </h3> 

      </div>

      <br/>

        <CheckboxOrRadioGroup
          title={"1. I'm a morning person and I like to go to sleep early"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection1}
          type={'radio'}
          options={this.state.answerOptions1}
          selectedOptions={this.state.answerSelection1} />

        <CheckboxOrRadioGroup
          title={"2. I'm a pretty clean person"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection2}
          type={'radio'}
          options={this.state.answerOptions2}
          selectedOptions={this.state.answerSelection2} />

          <CheckboxOrRadioGroup
          title={'3. I like coming home to a house with people.'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection3}
          type={'radio'}
          options={this.state.answerOptions3}
          selectedOptions={this.state.answerSelection3} />

          <CheckboxOrRadioGroup
          title={"4. I'm kind of picky about the way things should be"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection4}
          type={'radio'}
          options={this.state.answerOptions4}
          selectedOptions={this.state.answerSelection4} />

          <CheckboxOrRadioGroup
          title={"5. I'm a night-owl"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection5}
          type={'radio'}
          options={this.state.answerOptions5}
          selectedOptions={this.state.answerSelection5} />

          <CheckboxOrRadioGroup
          title={'6. I love playing music out loud'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection6}
          type={'radio'}
          options={this.state.answerOptions6}
          selectedOptions={this.state.answerSelection6} />

          <CheckboxOrRadioGroup
          title={"7.  I'm a party person"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection7}
          type={'radio'}
          options={this.state.answerOptions7}
          selectedOptions={this.state.answerSelection7} />

          <CheckboxOrRadioGroup
          title={'8. I like pets'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection8}
          type={'radio'}
          options={this.state.answerOptions8}
          selectedOptions={this.state.answerSelection8} />

          <CheckboxOrRadioGroup
          title={'9.  I need personal space to be happy'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection9}
          type={'radio'}
          options={this.state.answerOptions9}
          selectedOptions={this.state.answerSelection9} />

          <CheckboxOrRadioGroup
          title={"10. I'm a pretty social individual"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection10}
          type={'radio'}
          options={this.state.answerOptions10}
          selectedOptions={this.state.answerSelection10} />

          <CheckboxOrRadioGroup
          title={"11. I spend a lot of time in the house"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection11}
          type={'radio'}
          options={this.state.answerOptions11}
          selectedOptions={this.state.answerSelection11} />


          <CheckboxOrRadioGroup
          title={"12. I tend to eat home-cooked meals"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection12}
          type={'radio'}
          options={this.state.answerOptions12}
          selectedOptions={this.state.answerSelection12} />


          <CheckboxOrRadioGroup
          title={"13. I like for roommates to share with each other freely"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection13}
          type={'radio'}
          options={this.state.answerOptions13}
          selectedOptions={this.state.answerSelection13} />






          <div className = {styles.button1Divs} >

        <input
          type="submit"
          // className="btn btn-primary float-right"
          className = {styles.submitButton}
          value="Submit"/>
          <br/>
          <br/>

           </div>

           <div className = {styles.button2Divs} >

        <button
          className="btn btn-link float-left"
          className = {styles.clearButton}
          onClick={this.handleClearForm}>Clear form</button>

         </div>

      </form>

    
    );
  }
}

export default FormContainer;
