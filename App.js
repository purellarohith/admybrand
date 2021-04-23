/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomView from './components/BottomView';
import MainState from './components/MainState';
import TopView from './components/TopView';
import { height } from './constants';

const App = () => {
  return (
    <>
      <MainState>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <TopView />
          </View>
          <View style={styles.bottomView} >
            <BottomView />
          </View>
        </View>
      </MainState>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    height: height,
  },
  topView: {
    flex: 0.15,
    // backgroundColor: 'pink',
    maxHeight: height * 0.1,
    minHeight: height * 0.1,
    borderBottomWidth:0.5
  },
  bottomView: {
    flex: 0.85,
    // backgroundColor: 'yellow',
    maxHeight: height * 0.9,
    minHeight: height * 0.9,
    paddingTop:16
  },
});
