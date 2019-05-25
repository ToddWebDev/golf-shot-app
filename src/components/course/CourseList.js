import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Course from './Course';
import { connect } from 'react-redux';
import { getCourses } from '../../actions';

class CourseList extends Component {
  state = { courses: [] };

  componentDidMount(){
    this.props.getCourses();
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <Course key={course.name} course={course} />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderCourses()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    likes: state.likes
  }
}

export default connect(mapStateToProps, { getCourses })(CourseList);