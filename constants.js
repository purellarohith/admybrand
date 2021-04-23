/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');


export const randomText = (length) => {
  var randomtext = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    randomtext.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)));
  }
  return randomtext.join('');
};

