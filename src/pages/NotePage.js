import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom';

function Note({match, history}) {
    const noteId = match.params.id;

    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`);
        let data = await response.json();

        setNote(data);
    }

    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})
        });
        history.push('/');
    }

    let deleteNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push('/');
    }

    let createNote = async () => {
        await fetch(`http://localhost:8000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'created': new Date(), 'updated': new Date()})
        })
        history.push('/');
    }

    let handleSubmit = () => {
        if (noteId !== 'new' && !note.body){
            deleteNote()
        } else if (noteId !== 'new'){
            updateNote()
        } else if (noteId === 'new' && note.body){
            createNote()
        } else {
            return
        }
    }
    // let note = notes.find(note => note.id == noteId);

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {noteId !== 'new'? (
                    <button onClick={deleteNote}>Delete</button>
                ): (<button onClick={createNote}>Done</button>)}
            </div>
            <textarea onChange={(e) =>{setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>
        </div>
    )
}

export default Note;
