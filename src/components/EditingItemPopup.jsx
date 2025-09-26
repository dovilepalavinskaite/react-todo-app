export default function EditingItemPopup({ onClose, children }) {
    return <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
}