import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';
import Login from './src/components/login/Login';
import CourseList from './src/components/course/CourseList';
import ScoreList from './src/components/score/ScoreList';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <View>
        <Header title="Golf Shot" />
        <Login />      
      </View>
      // <Provider store={store}>
      //   <View>
      //     <Header title="Golf Shot" />
      //     <CourseList />
      //   </View>
      // </Provider>
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
