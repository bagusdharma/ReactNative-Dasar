import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/images/cart.png';

const Cart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#439BD1',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
