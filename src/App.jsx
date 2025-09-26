import { useState } from 'react'
import ItemInput from './components/ItemInput';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

   function handleDeleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  function handleEditItem(index) {
    const newValue = prompt("Edit item:", items[index]); 
    if (newValue !== null && newValue.trim() !== "") {
      setItems((prevItems) =>
        prevItems.map((item, i) => (i === index ? newValue : item))
      );
    }
  }

  return (
    <div className="container">
      <h1>My To-do List</h1>
      <ItemInput onAddItem={handleAddItem} />
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div>
              <button 
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => handleEditItem(index)} 
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
    </div>
  )
}

export default App
