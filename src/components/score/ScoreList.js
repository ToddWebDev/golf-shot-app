import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios';
import Score from './Score';

export default class ScoreList extends Component {
  state = { scores: [{score: ''}]};

  componentDidMount(){
    axios.get('http://localhost:3000/courses')
    .then(response => {
      console.log(response.status);
      this.setState({ scores: response.data.scores});
    });
  }
  
  getCourses() {
    return this.state.scores.map(score => {
      return (
        <Score key={score.score} score={score} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.getCourses()}
      </ScrollView>
    )
  }
}