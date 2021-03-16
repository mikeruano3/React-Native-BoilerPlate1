import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Note } from "../../dataDefinitions/note";
import { RootState } from "../../store";
import * as actions from '../../store/actions/index'

const NoteList = (props:any) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchNotes('eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtbXktYnVyZ2VyLWVkNjg5IiwiYXVkIjoicmVhY3QtbXktYnVyZ2VyLWVkNjg5IiwiYXV0aF90aW1lIjoxNjE1OTIxODE3LCJ1c2VyX2lkIjoiVUFqVFB6THJXcFZucVBVTXRWZUJJclZQTDF2MSIsInN1YiI6IlVBalRQekxyV3BWbnFQVU10VmVCSXJWUEwxdjEiLCJpYXQiOjE2MTU5MjE4MTcsImV4cCI6MTYxNTkyNTQxNywiZW1haWwiOiJtQG0uY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1AbS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.VQr0dXVVMA2KMWV-ZB4ZJUr-OuUoWIRzxQNYOdeNkPcjSxXK6rxrmkFCG8PWx14EAs6_y0UiskKVY3ML0Hmehfo-04jDg7iDVTShLKCQMMQdRG_VPEc9hZdfYqzv2SwZIzgfHghiXNJZaYh4l_KmHN7f9eed0G1fONf_IXhgrRzzMvhg3Lz8LVQsy_PVNmZooXQvu_MGcg5-Q5sm5qtJwtP9ZhEPcKQ9sc87JRQ2Vk3G1VQg5Tha4Lj-oRBSdcx7rlKO0l6VgvVgaz4mnqdfwlBJ_Xd5kbpFRI1hVaQf4qXSY94oMHnf39IcdCExIYN3RNXbexh3Wo0SKxEio__BwA'))
        return () => {
        }
    }, []);


    const notesList = (state:RootState) => state.notesReducer.notes
    const notes:Note[] = useSelector(notesList)
    console.log(notes)
    const noteslist = notes.map((data:Note) => (
        <li key={data.id}>
            {data.content} - {data.title} - {data.id}
        </li>
    ))

    return <ul>
        {noteslist}
    </ul>
}

export default NoteList