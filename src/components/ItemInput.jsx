export default function ItemInput() {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add your task"
          aria-label="Add your task"
          aria-describedby="button-addon2"
        />
       <button 
        className="btn btn-success btn-lg text-white"
        type="button"
        >
        <span className="fw-bold">+</span>
        </button>
      </div>
    </>
  );
}