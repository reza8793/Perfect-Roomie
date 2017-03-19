import React, {Component} from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import Select from '../components/Select';
import './Survey.css';
import helper from '../components/utils/helper.js'


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: ["18-23","23-27","27-31","31-35","35-45","45 and above"],
      AgeRangeSelection: '',
      answerOptions1: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection1: [],

      answerOptions2: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection2: [],

      answerOptions3: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection3: [],

      answerOptions4: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection4: [],

      answerOptions5: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection5: [],

      answerOptions6: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection6: [],

      answerOptions7: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection7: [],

      answerOptions8: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection8: [],

      answerOptions9: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection9: [],

      answerOptions10: ["1 - Strongly Disagree","2","3","4", "5 - Strongly Agree"],
      answerSelection10: []


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
    
  }
  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
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
          answerSelection10: data.answerSelection10

          

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
                          this.state.answerSelection9,this.state.answerSelection10]
      
    };

    var surveyArray = [this.state.answerSelection1,this.state.answerSelection2,
                          this.state.answerSelection3,this.state.answerSelection4,
                          this.state.answerSelection5,this.state.answerSelection6,
                          this.state.answerSelection7,this.state.answerSelection8,
                          this.state.answerSelection9,this.state.answerSelection10];
    console.log('Send this in a POST request:', formPayload);
    helper.postSurvey(surveyArray).then(function() {
      console.log('submitted to DB');
      this.handleClearForm(e);
    });

          //   $.ajax({
          //   type: 'POST',
          //   url: '/responses',
          //   data: formPayload
          // })
          // .done(function(data) {
          //   console.log("post successful");
          // })
          // .fail(function(jqXhr) {
          //   console.log('failed to register');
          // });




  }
  render() {
    return (



      <form className="container" onSubmit={this.handleFormSubmit}>
        
        <SingleInput
          inputType={'text'}
          title={'Full Name'}
          name={'name'}
          controlFunc={this.handleFullNameChange}
          content={this.state.Name}
          placeholder={'Type first and last name here'} />
        <Select
          title={'Full name'}
          name={'ageRange'}
          placeholder={'Choose your age range'}
          controlFunc={this.handleAgeRangeSelect}
          options={this.state.Age}
          selectedOption={this.state.AgeRangeSelection} />
       
        <CheckboxOrRadioGroup
          title={'1. You consider yourself a morning person and you like to go to sleep earlyy'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection1}
          type={'radio'}
          options={this.state.answerOptions1}
          selectedOptions={this.state.answerSelection1} />

        <CheckboxOrRadioGroup
          title={'2. You consider yourself clean and organized'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection2}
          type={'radio'}
          options={this.state.answerOptions2}
          selectedOptions={this.state.answerSelection2} />

          <CheckboxOrRadioGroup
          title={'3. Generally speaking, you like coming home to a house with people.'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection3}
          type={'radio'}
          options={this.state.answerOptions3}
          selectedOptions={this.state.answerSelection3} />

          <CheckboxOrRadioGroup
          title={'4. You consider yourself persnickety.'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection4}
          type={'radio'}
          options={this.state.answerOptions4}
          selectedOptions={this.state.answerSelection4} />

          <CheckboxOrRadioGroup
          title={'5. You consider yourself night-owl/vampire/bat(wo)man.'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection5}
          type={'radio'}
          options={this.state.answerOptions5}
          selectedOptions={this.state.answerSelection5} />

          <CheckboxOrRadioGroup
          title={'6. You love playing music out loud'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection6}
          type={'radio'}
          options={this.state.answerOptions6}
          selectedOptions={this.state.answerSelection6} />

          <CheckboxOrRadioGroup
          title={"7.  You're a believer of 'Live fast, die young'"}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection7}
          type={'radio'}
          options={this.state.answerOptions7}
          selectedOptions={this.state.answerSelection7} />

          <CheckboxOrRadioGroup
          title={'8. You like pets'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection8}
          type={'radio'}
          options={this.state.answerOptions8}
          selectedOptions={this.state.answerSelection8} />

          <CheckboxOrRadioGroup
          title={'9.  You need personal space to be happy'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection9}
          type={'radio'}
          options={this.state.answerOptions9}
          selectedOptions={this.state.answerSelection9} />

          <CheckboxOrRadioGroup
          title={'10. You consider yourself a pretty social individual'}
          // setName={'siblings'}
          controlFunc={this.handleAnswersSelection10}
          type={'radio'}
          options={this.state.answerOptions9}
          selectedOptions={this.state.answerSelection10} />

        
        
        
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
    );
  }
}

export default FormContainer;