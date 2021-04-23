/* eslint-disable prettier/prettier */
import React from 'react';

export const ListData = React.createContext();
export const TextInputValue = React.createContext();

const MainState = ({ children }) => {

  const [list, setList] = React.useState([]);
  const [textValue, setTextValue] = React.useState('');

  return (
    <ListData.Provider value={[list, setList]}>
      <TextInputValue.Provider value={[textValue, setTextValue]}>
        {children}
      </TextInputValue.Provider>
    </ListData.Provider>
  );
};

export default MainState;
