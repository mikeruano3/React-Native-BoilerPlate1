import * as actionTypes from '../actions/actionTypes'
import { Action } from 'redux'
import { Note } from '../../dataDefinitions/note'
import { FetchError } from '../../dataDefinitions/fetchError'

export interface NotesState {
    notes: Note[]
    loading: boolean
    error: FetchError
}

const initialState: NotesState = {
    notes: [],
    loading: false,
    error: { status: '', message: '' },
}

const reducer = (state = initialState, action: any):NotesState => {
    switch (action.type) {
        case actionTypes.FETCH_NOTES_INIT:
            return {
                ...state,
                notes: [], loading: false, error: { status: '', message: '' } 
            }
        case actionTypes.FETCH_NOTES_START:
            return {
                ...state,
                notes: [], loading: true, error: { status: '', message: '' } 
            }
        case actionTypes.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.payload.notes, loading: false, error: { status: '', message: '' } 
            }
        case actionTypes.FETCH_NOTES_FAILED:
            return {
                ...state,
                notes: [], loading: false, error: action.payload.error 
            }
        default: return state
    }
}

export default reducer