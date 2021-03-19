import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.productName}>New Macbook M1 2021</Text>
      <Text style={styles.productPrice}>Rp. 20.000.000</Text>
      <Text style={styles.location}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {fontSize: 12, fontWeight: 'bold', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    marginTop: 20,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
