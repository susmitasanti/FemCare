import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/Blogs/noteContext'

function AllNoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context

    const { notes, updateNote } = props
    return (
        <div className=' col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{notes.title}</h5>
                    <p className="card-text">{notes.description}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default AllNoteItem
