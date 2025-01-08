import "./UserProfile.css";
import axios from "axios";
import Form from "./components/Form";
import TopBar from "./components/TopBar";


function UserProfile() {

  const handleSubmit = async (formData) => {
    try {
      await axios.post("/server/advance_function/insertReminder",formData);
      alert("Reminder added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="Header">
        <TopBar />
      </div>

      <div className="form-div">
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default UserProfile;