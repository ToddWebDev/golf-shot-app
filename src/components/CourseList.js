import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios';
import Course from './Course';

export default class CourseFeed extends Component {
  state = { courses: [{name: ''}]};

  componentDidMount(){
    axios.get('http://localhost:3000/courses')
    .then(response => {
      console.log(response.status);
      this.setState({ courses: response.data});
    });
  }
  
  getCourses() {
    return this.state.courses.map(course => {
      return (
        <Course key={course.name} course={course} />
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