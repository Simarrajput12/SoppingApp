import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { fetchProducts } from '../redux/actions/productActions';
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

  render() {
    const { products } = this.props;
    return (
      <View style={styles.mainContainer} onPress={this.onClick}>
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
  { fetchProducts })
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
});
