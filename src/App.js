import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Flexbox from './pages/FlexBox';
import Position from './pages/Position';
import StylingComponent from './pages/StylingComponent';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanila from './pages/CallAPIVanila';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {<Flexbox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSVG /> */}
        {/* <CallAPIVanila /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;
