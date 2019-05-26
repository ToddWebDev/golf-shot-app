import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/components/header/Header';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Tabs from './src/config/Router'
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
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <Header title="Golf Shot" />
          <Tabs />
        </SafeAreaView>
      </Provider>
    );
  }
}
