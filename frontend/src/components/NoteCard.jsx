import {Link} from 'react-router'
import {PenSquare,Trash2Icon} from 'lucide-react'
import {formatDate} from '../libs/utils'
import api from '../libs/axios'
import toast from 'react-hot-toast'

function NoteCard({note,setNotes}){

    const handleDelete = async (event,id) => {
        event.preventDefault();
        if(!window.confirm("Are you sure you want to delete this note")) return;
        try{
            api.delete(`/notes/${id}`)
            toast.success("Task deleted successfully")
            setNotes((prev) => prev.filter(note => note._id !== id)) // Delete something from the array
        }catch(error){
            console.log("Error in handle delete",error)
            toast.error(`Failed to delete note`)
        }
    }

    return(
        <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg trannsition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60 ">{formatDate(new Date(note.createdAt))}</span>
                    <div className="flex items-center gap-1">
                        <PenSquare className="size-4"/>
                        <button className="btn btn-ghost btn-xs text-error" onClick={(event) => handleDelete(event, note._id)}>
                            <Trash2Icon className="size-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default NoteCard