import { useState } from "react";
import "./modal.css"

function Modal({ editData, onUpdate, onClose }) {
    const [formData, setFormData] = useState(editData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
   
    const handleSubmit = () => {
      onUpdate(formData);
    };

    const today = new Date().toISOString().split("T")[0];
  
    return (
      <div className="modal">
        <div className="modal-content">
         <div className="edit-header">
            <div className="modal-header">
            <h2>Edit User</h2>
            </div>
            <div className="modal-close">
              <button onClick={onClose}>&times;</button>
            </div>
         </div>
        <div className="modal-input-group">
          <input
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="modal-input"
          />
        </div>

        <div className="modal-input-group">
          <input
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            className="modal-input"
          />
        </div>

        <div className="modal-input-group">
             <input
               name="BirthDay"
               type="date"
               value={formData.BirthDay}
               onChange={handleChange}
               className="modal-input"
               max={today} // Set max date to today
               />
        </div>      
        <div className="modal-input-group">
          <input
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="modal-input"
          />
        </div>
      <div className="modal-submit">
        <button className="modal-button" onClick={handleSubmit}>Update</button>
      </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  