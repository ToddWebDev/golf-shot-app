import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import CourseList from './src/components/CourseList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Golf Shot" />
        <CourseList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
