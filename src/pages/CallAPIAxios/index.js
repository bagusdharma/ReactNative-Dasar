import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
  //GET
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const getData = () => {
    axios // menggunakan axios, hasil sudah berupa JSON
      .get('https://reqres.in/api/users/3')
      //   .then((result) => console.log('result : ', result))
      //   .then((err) => console.log('err :', err));
      .then((result) => {
        setDataUser(result.data.data);
      });
  };

  //POST
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const postData = () => {
    const dataForAPI = {
      name: 'Bagus',
      job: 'Loving Mel',
    };

    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('Post response : ', json);
    //     setDataJob(json);
    //   });

    axios
      .post('https://reqres.in/api/users', dataForAPI)
      //   .then((result) => console.log('result : ', result))
      //   .then((err) => console.log('err: ', err));
      .then((result) => {
        setDataJob(result.data);
      })
      .catch((err) => console.log('err : ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="Get Data" onPress={getData} />
      <Text> Response Get Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text> {`${dataUser.first_name} ${dataUser.last_name} `} </Text>
      <Text> {dataUser.email} </Text>
      <View style={styles.line} />

      <Button title="Post Data" onPress={postData} />
      <Text> Response post Data</Text>
      <Text> {dataJob.name}</Text>
      <Text> {dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
