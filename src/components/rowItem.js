import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const ItemContainer = ({ item, onPress, isShowDelete, onPressDelete }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer} >
      <View style={styles.subContainer}>
        <Image resizeMode='cover' style={styles.image} source={{ uri: item?.img }}></Image>
        <View style={styles.infoConatiner}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.text}>{item?.price}</Text>
        </View>
        {isShowDelete && <TouchableOpacity style={styles.deleteCotainer} onPress={onPressDelete}>
          <Image resizeMode='cover' style={styles.deleteIcon} source={require('../assets/images/delete.jpeg')}></Image>
        </TouchableOpacity>}
      </View>
    </TouchableOpacity>
  );

}
export default ItemContainer;

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
  image: {
    height: 80,
    width: 80,
  },
  itemContainer: {
    padding: 10
  },
  infoConatiner: {
    justifyContent: 'center',
    marginLeft: 10
  },
  subContainer: {
    flexDirection: 'row'
  },
  deleteCotainer: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  },
  deleteIcon: {
    height: 30,
    width: 30,
  },
});

