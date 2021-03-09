import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';


class Reciept extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.item} >
        <Text style={styles.text}>{item?.name}</Text>
        <Text style={styles.text}>{(item?.price).toFixed(2)}</Text>
      </View>
    )
  }

  ItemSeparatorComponent = () => {
    return (
      <View style={styles.lineSep}></View>
    )
  }

  onPressSubmit = () => {
    const { navigation: { navigate } } = this.props;
    Alert.alert('Thanks for buy');
    navigate('Home')
  }

  render() {
    const { cartItems, login: { user } } = this.props;
    const quantity = cartItems?.filter(item => item.id)
    const total = cartItems?.reduce((prev, next) => prev + next.price, 0);
    return (
      <View style={styles.mainContainer} onPress={this.onClick} >
        <View>
          <Text style={styles.textStyle}>{'User Detail'}</Text>
          <View style={styles.item}>
            <Text>{'User email'}</Text>
            <Text>{user?.email}</Text>
          </View>
          <View style={styles.item}>
            <Text>{'Phone number'}</Text>
            <Text>{user?.phoneNumber}</Text>
          </View>

        </View>
        <FlatList
          data={cartItems}
          extraData={cartItems}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={() => <Text style={styles.textStyle}>{'Product Detail'}</Text>}
        />
        <View>
          {cartItems.length ?
            <View>
              <View style={styles.productContainer}>
                <Text style={[styles.textStyle, { marginTop: 10, left: 5 }]}>{'Quantity & Price'}</Text>
                <View style={styles.item}>
                  <Text>{'Item Quantity'}</Text>
                  <Text>{quantity.length ? quantity.length : 0}</Text>
                </View>
                <View style={styles.item}>
                  <Text>{'Total Price'}</Text>
                  <Text style={styles.text}>{total ? total.toFixed(2) : 0}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.submitButton} onPress={() => this.onPressSubmit()} >
                <Text style={styles.submit}>{'Submit'}</Text>
              </TouchableOpacity>
            </View> :
            null}</View>
      </View>

    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
  login: state.login
});

export default connect(
  mapStateToProps,
  null
)(Reciept);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  name: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: '900'
  },
  text: {
    paddingVertical: 5
  },
  lineSep: {
    height: 1,
    backgroundColor: 'gray'
  },
  submit: {
    color: '#fff'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  productContainer: {
    marginBottom: 250,
    borderColor: 'blue',
    borderRadius: 8,
    borderWidth: 1
  },
  submitButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '900',
    marginTop: 20
  }
});
