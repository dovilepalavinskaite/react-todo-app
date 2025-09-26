import { useState } from 'react'
import ItemInput from './components/ItemInput';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import EditingItemPopup from './components/editingItemPopup';

function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

   function handleDeleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  // function handleEditItem(index) {
  //   const newValue = prompt("Edit item:", items[index]); 
  //   if (newValue !== null && newValue.trim() !== "") {
  //     setItems((prevItems) =>
  //       prevItems.map((item, i) => (i === index ? newValue : item))
  //     );
  //   }
  // }

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
                // onClick={() => handleEditItem(index)} 
                onClick={() => setShowModal(true)}
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
      {showModal && (
        <EditingItemPopup onClose={() => setShowModal(false)}>
          <h2>Edit Item</h2>
          <input type="text" className="form-control" placeholder="Edit..." />
        </EditingItemPopup>
      )}
    </div>
  )
}

export default App
