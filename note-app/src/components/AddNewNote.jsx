import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    }

    setTitle("");
    setDescription("");
  }



  return (
    <>
      <div className="add-new-note">
        <h2>Add New Note</h2>
        <form className="note-form" onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="text-field" />
          <input type="text" className="text-field" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit" className="btn btn--primary">Add New Note</button>
        </form>
      </div>
    </>
  )
}

export default AddNewNote;
