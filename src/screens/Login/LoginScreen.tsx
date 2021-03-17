import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Button, Text, Alert, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { FetchError } from '../../dataDefinitions/fetchError';
import NoteList from '../../screens/NoteList/NoteList';
import { RootState } from '../../store';
import * as actions from '../../store/actions/index'
import { AuthState } from '../../store/reducers/auth';

const Separator = () => (
    <View style={styles.separator} />
)

const LoginForm = (props) => {
    const dispatch = useDispatch()
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    
    const loadingIndicator:boolean = useSelector( (state:RootState) => state.authReducer.loading)
    const authError:FetchError = useSelector( (state:RootState) => state.authReducer.error)
    const authInfo:AuthState = useSelector( (state:RootState) => state.authReducer)

    const onLoginButton = () => {
        dispatch(actions.auth(email, password))
    }

    const onLogoutButton = () => {
        dispatch(actions.authLogout())
    }

    return (
        <SafeAreaView  style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="email"
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="write password"
                keyboardType="visible-password"
            />
            <Separator />
            <Button
                title="Press me"
                onPress={onLoginButton}
            />
            <Separator />
            {
                authInfo?.token && 
                <Button
                    color= "red"
                    title="Logout"
                    onPress={onLogoutButton}
                />
            }
            
            <Separator />
            {loadingIndicator && <ActivityIndicator 
                size="large" color="#0000ff" />}
            <Text style={styles.baseText}>
                {authInfo.userId}
            </Text>
            {
                authError && 
                <Text style={styles.baseText}>
                    {authError.message}
                    ----
                    {authError.status}
                    --
                    {authError.text}
                    --
                </Text>
            }
            
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    baseText: {
        fontWeight: 'bold',
        color: 'red'
    },
})  

export default LoginForm