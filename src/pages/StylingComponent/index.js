import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={macbook} style={{width: 188, height: 107}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook M1 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 20.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12}}>
          Jakarta Barat
        </Text>

        <View
          style={{
            backgroundColor: '#6FCF97',
            marginTop: 20,
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingComponent;
