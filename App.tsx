import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import NoteList from './src/screens/NoteList/NoteList';
import rootReducer from './src/store/index'
import * as actions from './src/store/actions/index'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Text>Should i learn</Text>
          <StatusBar style="auto" />
          <NoteList/>
        </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
