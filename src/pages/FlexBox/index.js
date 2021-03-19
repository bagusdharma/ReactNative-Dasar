import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class Flexbox extends Component {
//     constructor (props) {
//         super(props)
//         console.log("constructor")
//         this.state = {
//             subscriber: 100
//         }
//     }

//     componentDidMount() {
//         console.log("component did mount")
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 400,
//             })
//         }, 2000)
//     }

//     componentDidUpdate() {
//         console.log("component did update")
//     }

//     componentWillUnmount() {
//         console.log("component will unmount")
//     }

//     render() {
//         console.log("render")
//         return (
//             <View>
//                 <View style={{
//                         flexDirection: 'row',
//                         backgroundColor: '#c8d6e5',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         }} >
//                     <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//                     <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//                     <View style={{backgroundColor: '#1dd1a2', width: 50, height: 50}} />
//                     <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//                 </View>
//                 <View style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                     }}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Tentang</Text>

//                 </View>

//                 <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}} >
//                     <Image
//                         source={{ uri: 'https://yt3.ggpht.com/yti/ANoDKi4N_fPBphyuMeAy1onxx06gTdPqmnVJv5aAkIoAnw=s88-c-k-c0x00ffffff-no-rj-mo' }}
//                         style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
//                     />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}} >Bagus Dharma</Text>
//                         <Text> {this.state.subscriber} ribu Subscribers</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

const Flexbox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);

    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //     console.log('did update')
  //     setTimeout(() => {
  //         setSubscriber(400)
  //     }, 2000)
  // }, [subscriber])
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
        <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
        <View style={{backgroundColor: '#1dd1a2', width: 50, height: 50}} />
        <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{
            uri:
              'https://yt3.ggpht.com/yti/ANoDKi4N_fPBphyuMeAy1onxx06gTdPqmnVJv5aAkIoAnw=s88-c-k-c0x00ffffff-no-rj-mo',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bagus Dharma</Text>
          <Text> {subscriber} ribu Subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default Flexbox;
