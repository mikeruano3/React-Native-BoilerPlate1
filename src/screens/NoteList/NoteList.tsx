import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Note } from "../../dataDefinitions/note";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { RootState } from "../../store";
import * as actions from '../../store/actions/index'
import axios from '../../axios/axios-general'
import { FlatList, SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";

const Item = ({ title }:Note) => (
    <View >
      <Text >{title}</Text>
    </View>
)

const NoteList = (props:any) => {
    const dispatch = useDispatch()
    const notesList = (state:RootState) => state.notesReducer.notes
    const notes:Note[] = useSelector(notesList)
    const token: string = useSelector( (state:RootState) => state.authReducer.token)

    useEffect(() => {
        dispatch(actions.fetchNotes(token))
        return () => {
        }
    }, [token])

    const renderItem = ({ item }:any) => (
        <Item {...item} />
    )

    return   <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={{ color: 'white', fontSize: 22 }}>Notes</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
              data={notes}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
        </View>
      </View>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: (StatusBar.currentHeight || 0),
    alignItems: 'center',
    backgroundColor: '#1E1B26'
  },
  view: {
    flex: 1, 
    paddingHorizontal: 16
  }
})

export default (withErrorHandler(NoteList, axios))