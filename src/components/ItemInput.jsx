import { useState } from "react";

export default function ItemInput({ onAddItem }) {

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return; 
    onAddItem(text); 
    setText(""); 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add item"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            +
          </button>
        </div>
      </form>
    </>
  );
}