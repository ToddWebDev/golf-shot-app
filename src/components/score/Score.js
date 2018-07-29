import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

export default class Score extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scoreRow}>
          <Text>{this.props.score.score}</Text>
          <Text style={styles.scoreInfo}>Par: {this.props.course.par}</Text>
          <Text style={styles.scoreInfo}>Length: {this.props.course.length} yards</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 10
  },

  scoreRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  courseRow: {
    flexDirection: 'row',
  },

  scoreInfo: {
    paddingRight: 10,
  },

}