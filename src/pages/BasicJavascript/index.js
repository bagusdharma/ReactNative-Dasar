import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  //primitive
  const name = 'Bagus Dharma'; // string
  let age = '23'; //number
  const isMan = true; //boolean

  //complex
  const hewanPeliharaan = {
    nama: 'miaw',
    jenis: 'kucing',
    usia: 2,
    isLocal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; //object

  const sapaOrang = (nama, usia) => {
    return console.log(`Hello ${nama} usia anda ${usia} `);
  }; // function
  sapaOrang('Melda', 23);

  const namaOrang = ['Bagus', 'Melda', 'Dharma', 'Iswara']; //object ~ array
  typeof namaOrang; //object (kalau di panggil ini jadi object)

  //jika hujan turun, maka kalau kerja bawa payung

  //   if (hewanPeliharaan.nama === 'miaw') {
  //     console.log('Hai Koceng');
  //   } else {
  //     console.log('Sok kenal bro');
  //   }

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = '';
    // if (hewanPeliharaan.nama === 'miaw') {
    //   hasilSapa = 'Halo Koceng';
    // } else {
    //   hasilSapa = 'Sok kenal bro';
    // }
    // return hasilSapa;
    return objectHewan.nama === 'miaw' ? 'Halo Koceng' : 'Sok kenal bro';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Javascript</Text>
      <Text>Name : {name} </Text>
      <Text>Age: {age} </Text>
      <Text> {sapaHewan(hewanPeliharaan)} </Text>
      <Text>======== LOOP</Text>
      {namaOrang.map((orang) => (
        <Text> {orang} </Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
