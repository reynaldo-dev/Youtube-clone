import React from 'react'
import AppRouter from './src/routing/AppRouter';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </Provider>
  );
}


