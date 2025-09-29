import { useState } from 'react';
import ItemInput from './components/ItemInput';
import EditingItemPopup from './components/editingItemPopup';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleDeleteItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSaveEdit(newValue) {
    setItems((prev) =>
      prev.map((item, i) => (i === editingIndex ? newValue : item))
    );
    setEditingIndex(null);
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">My To-do List</h1>

      <ItemInput onAddItem={handleAddItem} />

      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{item}</span>
            <div className="p-2">
              <button
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => setEditingIndex(index)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDeleteItem(index)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingIndex !== null && (
        <EditingItemPopup
          editableText={items[editingIndex]}
          onSave={handleSaveEdit}
          onClose={() => setEditingIndex(null)}
        />
      )}
    </div>
  );
}

export default App;