import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom';

function Note({match}) {
    const noteId = match.params.id;

    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`);
        let data = await response.json();

        setNote(data);
    }
    // let note = notes.find(note => note.id == noteId);

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}></textarea>
        </div>
    )
}

export default Note;
