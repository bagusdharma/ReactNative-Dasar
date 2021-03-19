import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';


const SampleComponent = () => {
    return (
      <View>
      <View style={{width: 80, height: 80, backgroundColor: 'blue'}}></View>
      <NamaLengkap />
      <Text>Bagus</Text>
      <Text>Dharma</Text>
      <Text>Iswara</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
      </View>
    )
  }
  
  // functional component
  const NamaLengkap = () => {
    return <Text>Bagus Dharma Iswara</Text>
  };
  
  const Photo = () => {
    return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
  }
  
  // class component
  class BoxGreen extends Component {
    render () {
      return <Text>Komponen class</Text>
    }
  }
  
  class Profile extends Component {
    render () {
      return (
        <View>
          <Image 
          source={{uri: 'https://placeimg.com/100/100/nature'}} 
          style={{width: 100, height: 100}} 
          />
          <Text> Gambar baru </Text>
        </View>
      );
    }
  }

  export default SampleComponent;