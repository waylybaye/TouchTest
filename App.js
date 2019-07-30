/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const POINT_WIDTH = 20;

const Pointer = ({x, y}) => {
  return <View style={[styles.pointer, {
    left: x - POINT_WIDTH / 2, top: y - POINT_WIDTH / 2,
  }]}>
  </View>
}

const App = () => {
  let [points, setPoints] = useState([]);

  const onPress = ({nativeEvent}) => {
    setPoints(points => [...points, {
      x: nativeEvent.pageX,
      y: nativeEvent.pageY,
    }])
  }

  const onClear = () => {
    setPoints([])
  }

  return (
    <Fragment>
      <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.touchable}>
        {points.map((point, index) => <Pointer key={'p' + index} {...point}/>)}

        <TouchableOpacity style={styles.safe} activeOpacity={1}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{lineHeight: 40, color: '#ddd'}}>
              次数：
              <Text style={{fontSize: 40, fontWeight: 'bold', color: '#000'}}>
                {points.length}
              </Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.innerTouchable} onPress={onClear}>
            <Text style={{color: '#fff'}}>清空</Text>
          </TouchableOpacity>

          <View style={{flex: 1}}>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    paddingHorizontal: 80,
    paddingVertical: 100,
  },
  safe: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTouchable: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#000',
  },
  centerText: {
    color: '#ddd',
    flex: 1,
    justifyContent: 'center',
  },
  pointer: {
    position: 'absolute',
    width: POINT_WIDTH,
    height: POINT_WIDTH,
    borderRadius: POINT_WIDTH / 2,
    backgroundColor: 'rgba(255, 10, 10, 0.5)',
  }
});

export default App;
