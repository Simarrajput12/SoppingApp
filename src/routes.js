

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Detail, Cart, Reciept, Login } from './container/index';
import { connect } from 'react-redux';


const Stack = createStackNavigator();


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { login: { user } } = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user.email ? 'Home' : 'Login'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Reciept" component={Reciept} />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}



const mapStateToProps = (state) => ({
  login: state.login
})
export default connect(
  mapStateToProps,
  null)
  (App);

