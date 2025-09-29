import { useState } from 'react';

export default function EditingItemPopup({ editableText, onSave, onClose }) {
  const [text, setText] = useState(editableText);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(text);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="h4 mb-3">Edit Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <div className="mt-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-success me-2">
              Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}