import React from 'react'
import {Link} from 'react-router-dom';

const ListItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div>
                <div className="notes-list-item">
                    <p>{note.body}</p>
                </div>
            </div>
        </Link>
    )
}

export default ListItem
