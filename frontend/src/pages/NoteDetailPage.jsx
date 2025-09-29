import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router'
import api from '../libs/axios'
import toast from 'react-hot-toast'
import {LoaderIcon,ArrowLeftIcon,Trash2Icon} from 'lucide-react'
import {Link} from 'react-router'

function NoteDetailPage(){

  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try{
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      }catch(error){
        console.log("Error in fetching note",error)
        toast.error("Failed to fetch data")
      }finally{
        setLoading(false)
      }
    }
    fetchNote()
  },[id])

  console.log({note})

  if(loading){
    return(
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10"/>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className=""
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage