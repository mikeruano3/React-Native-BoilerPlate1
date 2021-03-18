import React, { useState, useEffect } from 'react'
import { AxiosInstance } from 'axios'
import { FetchError } from '../../dataDefinitions/fetchError'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const withErrorHandler = (WrapperComponent:any, httpClient:AxiosInstance) => {
    return (props:any) => {
        const [ error, setError ] = useState<FetchError | null>(null)

        const reqInterceptor = httpClient.interceptors.request.use(req => {
            // set to null on NEW request
            setError(null)
            return req
        })
    
        const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
            const errorData:FetchError = {
                status: err.response.status,
                message: err.response.data?.error,
                text: err.response.statusText
            }
            setError(errorData)
        })
    
        useEffect(() => {
            return () => {
                httpClient.interceptors.request.eject(reqInterceptor)
                httpClient.interceptors.response.eject(resInterceptor)
            }
        }, [reqInterceptor, resInterceptor])
    
        const errorConfirmedHandler = () => {
            setError(null)
        }

        return (
                <>
                    <WrapperComponent {...props} />
                    {/**
                     <Modal 
                        show={error}
                        modalClosed={clearError}>
                        {error && error.message}
                    </Modal>
                     **/}
                     { error && 
                        <Text>There's been an error: {JSON.stringify(error)}</Text>
                     }
                </>
        )
    }
}

export default withErrorHandler