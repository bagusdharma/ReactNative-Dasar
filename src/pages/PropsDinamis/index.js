import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 50, height: 50, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}> {props.judul} </Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text> Materi Component Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Private"
            gambar="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/159441774_260155022496904_329058708524716970_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OU8fZ3GpS8wAX_VQbbP&oh=300dba3e72f155e8db5d4e1f177ec392&oe=607907DF"
          />
          <Story
            judul="Kelas Online"
            gambar="https://placeimg.com/640/480/animals"
          />
          <Story
            judul="Melda"
            gambar="https://instagram.fdps5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/106043541_3281803688551810_8329509282418267501_n.jpg?tp=1&_nc_ht=instagram.fdps5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KDXW_S_P_LQAX_bl0pI&oh=175e3f45110455cfc360211b04fd9c36&oe=60777C9A"
          />
          <Story judul="Sign" gambar="https://placeimg.com/640/480/arch" />
          <Story
            judul="Environment"
            gambar="https://placeimg.com/640/480/nature"
          />
          <Story judul="Beach" gambar="https://placeimg.com/640/480/people" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
