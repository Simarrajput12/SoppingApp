import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import _ from "lodash";
import Regex from '../utilities/regex';
import Toast from 'react-native-simple-toast';
import { login } from '../redux/actions/loginActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phoneNumber: ''
    }
  }

  onSubmit = () => {
    const {
      navigation: { navigate }, login
    } = this.props;
    const { email, password, phoneNumber } = this.state;
    if (_.isEmpty(email.trim())) {
      Toast.show('Please enter email');

      return;
    }
    if (!Regex.validateEmail(email.trim())) {
      Toast.show('Please enter valid email');

      return;
    }
    if (_.isEmpty(password.trim())) {
      Toast.show('Please enter password');

      return;
    }
    if (password.length <= 6) {
      Toast.show('Password must be atleast 6 digits');

      return;
    }
    if (_.isEmpty(phoneNumber.trim())) {
      Toast.show('Please enter phone number');

      return;

    }
    const request = {
      email,
      password,
      phoneNumber
    }
    login(request)
    navigate('Home')
  }

  render() {
    const { email, password, phoneNumber } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            value={email}
            placeholder={'Enter email'}
            style={styles.textInput}
            onChangeText={(email) => this.setState({ email: email })} />
          <TextInput
            value={password}
            placeholder={'Enter password'}
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={(password) => this.setState({ password: password })} />
          <TextInput
            value={phoneNumber}
            placeholder={'Enter phone number'}
            style={styles.textInput}
            keyboardType='numeric'
            onChangeText={(phoneNumber) => this.setState({ phoneNumber: phoneNumber })} />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit} >
          <Text style={styles.submit}>{'Submit'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default connect(
  null,
  { login })
  (Login);


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'center',
    flex: 1
  },
  textInput: {
    height: 50,
    width: '100%',
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginTop: 30
  },
  submitButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'orange',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200
  },
  submit: {
    color: '#fff'
  }
})