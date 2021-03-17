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

    return  <SafeAreaView style={styles.container}>
        <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: (StatusBar.currentHeight || 0),
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default (withErrorHandler(NoteList, axios))