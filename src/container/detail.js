import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addToCart } from '../redux/actions/cartActions';
import { connect } from 'react-redux';


class Detail extends Component {
  constructor(props) {
    super(props);
  }


  addItemsToCart = (product) => {
    this.props.addToCart(product);
    Alert.alert('Added to cart')
  }


  render() {
    const { item } = this?.props?.route?.params;
    const { navigation: { navigate } } = this.props;
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image resizeMode='cover' style={styles.image} source={{ uri: item?.img }}></Image>
        </View>
        <View style={styles.infoConatiner}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{'Price' + ' ' + item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => this.addItemsToCart(item)} >
          <Text style={styles.add}>{'Add to cart'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigate('Cart')} >
          <Text style={styles.add}>{'Go to cart'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  null,
  { addToCart })
  (Detail);

const styles = StyleSheet.create({

  imageContainer: {
    alignSelf: 'center',
    marginTop: 20
  },
  image: {
    height: 250,
    width: 250,
  },
  infoConatiner: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 40
  },
  name: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: '900'
  },
  text: {
    paddingVertical: 5
  },
  addButton: {
    height: 40,
    width: '50%',
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartButton: {
    height: 40,
    width: '50%',
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  add: {
    color: '#fff'
  }
});
