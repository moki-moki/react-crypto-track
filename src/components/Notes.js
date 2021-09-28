import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsTrash, BsPencil } from "react-icons/bs";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showTextArea, setShowTextArea] = useState(false);
  const [editText, setEditText] = useState("");
  const [edit, setEdit] = useState(null);
  const [notes, setNotes] = useState([]);

  const createNote = () => {
    return {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      title: title,
      text: text,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = createNote(title, text);
    if (text !== "" && title !== "") {
      setText("");
      setTitle("");
      notes.push(newNote);
      setShowTextArea(false);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("notes") || "[]";
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  const delNote = (id) => {
    let updateNotes = [...notes].filter((n) => n.id !== id);
    setNotes(updateNotes);
  };

  const editNote = (id) => {
    let updateNote = [...notes].map((note) => {
      if (note.id === id) {
        note.text = editText;
      }
      return note;
    });
    setNotes(updateNote);
    setEdit(null);
    setEditText("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setShowTextArea(true)}
          value={title}
        />
        {showTextArea ? (
          <textarea
            className="textArea"
            placeholder="Text here..."
            maxLength="200"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          ""
        )}
        <button className="noteBtn" type="submit">
          &#43;
        </button>
      </form>
      <div className="grid">
        {notes.map((note) => {
          return (
            <div className="note" key={note.id}>
              {edit === note.id ? (
                <input
                  className="editInput"
                  type="text"
                  placeholder="Edit note..."
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <div className="noteInfo">
                  <div style={{ wordWrap: "anywhere" }}>
                    <h3>{note.title}</h3>
                    <p>{note.text}</p>
                  </div>
                  <p className="date">{note.date}</p>
                </div>
              )}
              <div className="noteBtns">
                <button onClick={() => delNote(note.id)} className="del">
                  Delete <BsTrash />
                </button>
                {note.id === edit ? (
                  <button className="del" onClick={() => editNote(note.id)}>
                    Submit Edit
                  </button>
                ) : (
                  <button className="del" onClick={() => setEdit(note.id)}>
                    Edit <BsPencil />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
