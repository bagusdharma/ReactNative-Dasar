import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMyApp from '../../assets/images/gambarsvg.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Menggunakan File SVG didalam React Native
      </Text>
      <IllustrationMyApp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
