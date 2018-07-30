import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './InnerSection';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput placeholder="Email" />
        </InnerSection>
        <InnerSection>
          <FormInput placeholder="Password" secureTextEntry={true} />
        </InnerSection>
        <Button title="Login" backgroundColor="skyblue" style={{marginTop: 30}} />
      </View>
    )
  }
}

const styles = {
  container: {
    marginTop: 30
  }
}