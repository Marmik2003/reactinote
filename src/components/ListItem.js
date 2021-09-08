import React from 'react'

const ListItem = ({note}) => {
    return (
        <div>
            <div className="notes-list-item">
                <p>{note.body}</p>
            </div>
        </div>
    )
}

export default ListItem
