import { useState } from "react";
import "./form.css";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Get the current date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
            <input
              type="date"
              id="birthday"
              value={formData.birthday}
              onChange={handleChange}
              max={today} // Restrict to current and past dates
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit-form">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
