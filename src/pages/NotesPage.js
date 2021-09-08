import React from 'react'
import ListItem from '../components/ListItem'

import notes from '../assets/data'

function NotesPage() {
    return (
        <div>
           {notes.map(note => (
               <ListItem note={note} key={note.id} />
           ))}
        </div>
    )
}

export default NotesPage
