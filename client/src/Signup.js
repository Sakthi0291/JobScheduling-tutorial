import "./Signup.css";
import React, { useState } from "react";

function Signup() {
  const [displayText, setDisplayText] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);
    setDisplayText(
      "An account verification email has been sent to your email address"
    );

    const data = {
      first_name: form.firstName,
      last_name: form.lastName,
      email_id: form.email,
      platform_type: "web",
    };

    try {
      const auth = window.catalyst.auth;
      const signupResponse = await auth.signUp(data);

      if (signupResponse.status === 200) {
        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      } else {
        alert(signupResponse.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
      setShowForm(true); // Show the form again if there's an error
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div id="signup" className="signup">
      {showForm ? (
        <div>
          <center>
            <img
              width="80px"
              height="80px"
              src="https://cdn2.iconfinder.com/data/icons/user-management/512/profile_settings-512.png"
              alt="User Profile"
            />
            <h1>User Profile Management</h1>
          </center>
          <form onSubmit={handleSubmit} className="modal-content">
            <center>
              <h1>Sign Up</h1>
              <p>Please fill this form to sign up for a new account.</p>
            </center>
            <label htmlFor="firstName">
              <b>First Name</b>
              <input
                name="firstName"
                className="inputs"
                placeholder="Enter First Name"
                value={form.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="lastName">
              <b>Last Name</b>
              <input
                name="lastName"
                className="inputs"
                placeholder="Enter Last Name"
                value={form.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="email">
              <b>Email</b>
              <input
                name="email"
                className="inputs"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <p>
              By creating an account, you agree to our{" "}
              <a
                href="https://www.zoho.com/catalyst/terms.html"
                target="_blank"
                rel="noopener noreferrer"
                id="link"
              >
                Terms & Conditions
              </a>
              .
            </p>
            <center>
              <input type="submit" value="Sign Up" className="signupfnbtn" />
            </center>
          </form>
        </div>
      ) : (
        <p>{displayText}</p>
      )}
    </div>
  );
}

export default Signup;
