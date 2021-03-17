import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as actions from '../../store/actions'
import LoginForm from '../Login/LoginScreen'
import NoteList from '../NoteList/NoteList'

export const HomeComponent = props => {
    //const dispatch = useDispatch()
    //dispatch(actions.authCheckState())
    return <View style={styles.container}>
        <Text>Should i learn</Text>
        <LoginForm />
        <NoteList />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
