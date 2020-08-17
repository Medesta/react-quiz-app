import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Counter from './Counter/Counter';
import Question from './Question/Question';
import Opt from './Option/Opt';
import Next from './Next/Next';
import FinalCounter from './FinalCounter/FinalCounter'

class App extends Component {
  state = {
    question: [],
    total: '',
    cur: 0,
    marks: 0,
    submitFlag:false,
    selectedOption: ""
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/questions`)
      .then(ques => {
        const que = ques.data;
        const len = que.length;
        this.setState({
          question: que,
          total: len
        });
        // console.log(this.state);
      })
      .catch(error => alert('Could get the data from Question\'s api'));
  }
  optionHandler = (event, e) => {
    event.preventDefault();
    // console.log(e, 1);
    this.setState({
      selectedOption: e
    })
  }
  nextHandler = () => {
    let { cur, marks } = this.state;
    axios.get(`http://localhost:8080/answer/${this.state.cur +1}`)
    .then(ans =>{
      if(ans.data.answer === this.state.selectedOption){
        // console.log("Correct !!!!");
        
        this.setState({
          cur: cur + 1,
          selectedOption: '',
          marks : marks + 10 
        })
        // console.log(this.state);

      }
      else{
        // console.log("wrong !!!!!");
        this.setState({
          cur: cur + 1,
          selectedOption: '',
          marks : marks - 10 
        })
        // console.log(this.state);
      }
    })
    .catch(error => alert('Could get the data from Question\'s api'));
  }
  submitHandler = () => {
    let {marks } = this.state;
      this.setState({
        marks : marks + 10 ,
        submitFlag:true
      })
  }
  againHandler = () =>{
    this.setState({
      cur: 0,
      marks: 0,
      submitFlag:false,
      selectedOption: ""
    })
  }

  render() {
    let { cur, total, marks, question, selectedOption } = this.state;
    let counter = <Counter
      key={cur}
      current={cur}
      total={total}
      marks={marks}
    />
    let finalCounter = <FinalCounter
      key={cur}
      current={cur}
      total={total}
      marks={marks}
    />
    let que = <Question
      key={total}
      current={cur}
      total={total}
      marks={marks}
      que={question}
    />
    let opt = this.state.question[this.state.cur]?.choices.map((options, cur) => (
      <Opt
        key={cur}
        opt={options}
        value={selectedOption}
        onClick={(e) => this.optionHandler(e, options)}
      />
    ))
if(!this.state.submitFlag){
    return (
      <div className="App" >
        <div className="page-header">
          <h1>Quiz App</h1>
        </div>
        {counter}
        <div>
          {que}
          <div className="opt">
            {opt}
          </div>
        </div>
        <div>
          {cur < (total -1) ?
            <Next
              key={cur}
              button='Next'
              onClick={(e) => this.nextHandler()}
            />
            :
            <Next
              key={cur}
              button='Submit'
              onClick={(e) => this.submitHandler()}
            />
          }
        </div>

      </div>
    );
  }
    else{
      return (
        <div className="App Finalscore" >
          <div className="page-header">
            <h1>Quiz App</h1>
          </div>
          {finalCounter}
          <div className="try">
          <Next
          key={cur}
          button='Try Again'
          onClick={(e) => this.againHandler()}
          />
        </div>
        </div>
        
      );
    }
  }

}

export default App;
