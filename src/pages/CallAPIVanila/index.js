import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const CallAPIVanila = () => {
    //GET
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)   
        })
    }

    //POST
    const [dataJob, setDataJob] = useState ({
        name: '',
        job : ''
    })
    const dataForAPI = {
        name: "Bagus",
        job : "Loving Mel"
    }
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForAPI)
    }) 
    .then(response => response.json())
    .then(json => {
        console.log('Post response : ', json)
        setDataJob(json)
    })
    // useEffect(() => {
        // // GET
        // fetch('https://reqres.in/api/users?page=2')
        // .then(response => response.json())
        // .then(json => console.log(json))

        // //POST
        // const dataForAPI = {
        //     name: "Bagus",
        //     job : "Loving Mel"
        // }
        // console.log('data object ', dataForAPI)
        // console.log('data string ', JSON.stringify(dataForAPI))
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'

        //     },
        //     body: JSON.stringify(dataForAPI)
        // }) 
        // .then(response => response.json())
        // .then(json => {
        //     console.log('Post response : ', json)
        // })
        
    // }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan vanilaJS</Text>
            <Button title="Get Data" onPress={getData} />
            <Text > Response Get Data</Text>
            <View style={styles.line}></View>
            <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
            <Text> {`${dataUser.first_name} ${dataUser.last_name} `} </Text>
            <Text> {dataUser.email} </Text>
            <Button title="Post Data" />
            <Text > Response post Data</Text>
            <Text > {dataJob.name}</Text>
            <Text > {dataJob.job}</Text>
        </View>
    )
}

export default CallAPIVanila

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 50}
  });
