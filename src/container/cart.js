import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions/cartActions';
import { RowItem } from '../components'
const height = Math.round(Dimensions.get('window').height);


class Cart extends Component {
  constructor(props) {
    super(props);
  }


  deleteItemsToCart = (item) => {
    const { removeItem } = this.props;
    removeItem(item);
    Alert.alert('Item deleted')
  };


  renderItem = ({ item }) => {
    return (
      <View>
        { item &&
          <RowItem item={item} isShowDelete onPressDelete={() =>
            Alert.alert(
              'Alert',
              'Are you sure you want to delete?',
              [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => this.deleteItemsToCart(item.id) },
              ],
              { cancelable: true }
            )
          } />
        }
      </View>
    )
  }

  ItemSeparatorComponent = () => {
    return (
      <View style={styles.lineSep}></View>
    )
  }
  render() {
    const { cartItems, navigation: { navigate }, } = this.props;

    return (
      <View style={styles.mainContainer} onPress={this.onClick} >
        <FlatList
          data={cartItems}
          extraData={cartItems}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => <View style={styles.noitemContainer}><Text>{'No Item Found'}</Text></View>}
        />
        {cartItems.length ?
          <TouchableOpacity style={styles.recieptButton} onPress={() => navigate('Reciept')} >
            <Text style={styles.buy}>{'Buy'}</Text>
          </TouchableOpacity> : null}
      </View>

    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});

export default connect(
  mapStateToProps,
  { removeItem }
)(Cart);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  lineSep: {
    height: 1,
    backgroundColor: 'gray'
  },
  recieptButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'green',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100
  },
  buy: {
    color: '#fff'
  },
  noitemContainer: {
    alignItems: 'center',
    alignItems: 'center',
    marginTop: height / 2
  }
});
