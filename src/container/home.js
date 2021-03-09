import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { fetchProducts } from '../redux/actions/productActions';
import { logout } from '../redux/actions/loginActions';
import { connect } from 'react-redux';
import { RowItem } from '../components'


class Home extends Component {
  constructor(props) {
    super(props);
    //initialize state

  }

  componentDidMount = () => {
    this.props.fetchProducts();
  }

  onSelect = (item) => {
    const { navigation: { navigate } } = this.props;
    navigate('Detail', { item })
  }

  renderItem = ({ item }) => {
    return (
      <RowItem item={item} onPress={() => this.onSelect(item)} />
    )
  }

  ItemSeparatorComponent = () => {
    return (
      <View style={styles.lineSep}></View>
    )
  }

  onPressSubmit = () => {
    const { logout, navigation: { navigate } } = this.props;
    logout();
    navigate('Login')
  }

  onLogout = () => {
    const { logout } = this.props;
    Alert.alert(
      'Alert',
      'Are you sure you want to log out ?',
      [
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => this.onPressSubmit() },
      ],
      { cancelable: true }
    )

  }

  render() {
    const { products } = this.props;
    return (
      <View style={styles.mainContainer} >
        <TouchableOpacity style={styles.cartButton} onPress={this.onLogout} >
          <Text style={styles.add}>{'Log out'}</Text>
        </TouchableOpacity>
        <Text style={styles.allProducts}>All Products</Text>
        <FlatList
          data={products}
          extraData={products}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items
})
export default connect(
  mapStateToProps,
  { fetchProducts, logout })
  (Home);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  allProducts: {
    fontSize: 20,
    fontWeight: '900',
    marginTop: 10
  },
  lineSep: {
    height: 1,
    backgroundColor: 'gray'
  },
  cartButton: {
    height: 40,
    width: '25%',
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10000
  },
  add: {
    color: '#fff'
  }
});
