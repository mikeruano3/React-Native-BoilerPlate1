import { FetchError } from "../../dataDefinitions/fetchError"
import { Note } from "../../dataDefinitions/note"
import axios from '../../axios/axios-general'
import * as actionTypes from './actionTypes'
import { AppThunk } from "../index"

const fetchNotesStart = () => {
    return {
        type: actionTypes.FETCH_NOTES_START,
    }
}

const fetchNotesSuccess = (notes: Note[]) => {
    return {
        type: actionTypes.FETCH_NOTES_SUCCESS,
        payload: {
            notes: notes
        }
    }
}

const fetchNotesFail = (error: FetchError) => {
    return {
        type: actionTypes.FETCH_NOTES_FAILED,
        payload: {
            error: error
        }
    }
}

export const fetchNotes = (token: string): AppThunk<any> => async dispatch => {
    dispatch(fetchNotesStart())
    const queryParams = '?auth=' + token
    try {
        const fetchedNotes: Note[] = []
        const res: any = await axios.get('/notes.json' + queryParams)
        for (const key in res.data) {
            fetchedNotes.push({
                ...res.data[key],
                id: key
            })
        }
        dispatch(fetchNotesSuccess(fetchedNotes))
    } catch (error: any) {
        dispatch(fetchNotesFail({ message: error.message, code: error.code }))
    }
}