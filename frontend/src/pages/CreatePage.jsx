import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router'
import {ArrowLeftIcon} from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

function CreatePage(){

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("ALL fields are required")
      return;
    }
    setLoading(true)
    try{
      await axios.post("http://localhost:5001/api/notes",{title,content})
      toast.success("Note created successfully")
      navigate("/")
    }catch(error){
      toast.error("Failed to create a note please ttry again later")
      console.log("Error in creating Note",error)
    }finally{
      setLoading(false)
    }
  }

  return (
  <div className="min-h-screen bg-base-200">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link to={"/"} className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5"/>Back To Notes
        </Link>

        <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Create New Note</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="Note Title" className="input input-bordered " value={title} onChange={(event) => setTitle(event.target.value)}/>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea placeholder="Write you note here" className="textarea textarea-bordered h-32" value={content} onChange={(event) => setContent(event.target.value)}/>
              </div>

              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>)
}

export default CreatePage
