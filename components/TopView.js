/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { width, randomText } from '../constants';
import { ListData, TextInputValue } from './MainState';
import Icon from 'react-native-vector-icons/Feather';


const TopView = () => {
  const [value, setValue] = React.useContext(TextInputValue);
  const [list, setList] = React.useContext(ListData);
  const inputHandler = (text) => {
    console.log(text);
    setValue(text);
  };

  const RandomText = () => {
    setList([...list, randomText(Math.round(Math.random() * 11) + 15)]);
    // console.log(makeid(5));
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.leftView} >
        <TextInput
          value={value}
          onChangeText={(text) => inputHandler(text)}
          placeholder={'Search'}
          style={styles.inputView}
          placeholderTextColor={'rgba(0,0,0,0.5)'}
          autoCorrect={false}
        />
      </View>
      <View style={styles.rightView} >
        <TouchableOpacity style={styles.plusView} onPress={() => RandomText()}>
          <Icon name="plus" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopView;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  leftView: {
    // backgroundColor: 'green',
    width: width * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
  },
  rightView: {
    // backgroundColor: 'white',
    // flex:0.3
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    borderRadius: 12,
    width: width * 0.6,
    borderWidth: 1,
    paddingHorizontal: 16,
    color: '#000',
    textDecorationLine: 'none',
  },
  plusView: {
    // backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.1,
    maxHeight: width * 0.1,
    borderRadius: (width * 0.1) / 2,
  },
});
