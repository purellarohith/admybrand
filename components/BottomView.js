/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { height, width } from '../constants';
import { ListData, TextInputValue } from './MainState';

const BottomView = () => {
  const [list, setList] = React.useContext(ListData);
  const [value, setItem] = React.useContext(TextInputValue);
  // let flatlistRef;
  const renderItems = ({ item, index }) => {

    if (item.trim() !== '') {
      return (
        <View style={styles.reView}>
          <Text selectable={true} style={styles.text}>{item}</Text>
        </View>
      );
    }


  };

  const ItemSupparaters = () => {
    return (
      <View
        style={{ width: width, height: 0.5, backgroundColor: 'rgba(0,0,0,0.5)' }}
      />
    );
  };

  return (
    <View style={styles.fMain}>
      <FlatList
        // ref={(ref) => { flatlistRef = ref; }}
        keyExtractor={(item, index) => index.toString()}
        data={list.filter((i) => i.toLowerCase().match(value.trim().toLowerCase()))}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        // onContentSizeChange={(width, height) => flatlistRef.scrollToEnd({ animated: true })}
        ItemSeparatorComponent={ItemSupparaters}
        windowSize={height}

      />
    </View>
  );
};

export default BottomView;

const styles = StyleSheet.create({
  fMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  reView: {
    height: 50,
    width: width,
    // backgroundColor: 'pink',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
