import React, { Component } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Course extends Component {
  constructor(){
    super();

    this.like = false;
    this.state = { likeIcon: 'ios-heart-outline' };

  }

  toggleLike() {
    this.like = !this.like;
    if(this.like) {
      this.setState({
        likeIcon: 'ios-heart'
      });
    } else {
      this.setState({
        likeIcon: 'ios-heart-outline'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text>{this.props.course.name}</Text>
        </View>
        <View>
          <Image
            style={{width: null, height: 200}}
            source={{uri: this.props.course.image}} />
        </View>
        <View style={styles.likeContainer}>
          <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
            <Ionicons
              name={this.state.likeIcon}
              size={30}
              style={{color: this.state.likeIcon === 'ios-heart' ? 'red' : 'black'}}>
            </Ionicons>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.courseRow}>
          <Text style={styles.courseInfo}>Par: {this.props.course.par}</Text>
          <Text style={styles.courseInfo}>Length: {this.props.course.length} yards</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 10
  },

  titleRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  courseRow: {
    flexDirection: 'row',
  },

  courseInfo: {
    paddingRight: 10,
  },

  likeContainer: {
    paddingTop: 10,
    paddingBottom: 10
  }

}