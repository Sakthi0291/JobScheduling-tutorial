import { useEffect } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    // Configuration is optional
    const config = {
      css_url: "/app/embeddediframe.css", // Login page customization CSS file path, if not provided default CSS will be rendered
      is_customize_forgot_password: false, // Default value is false. Set to true to customize Forgot Password page
      forgot_password_id: "login", // Element ID where the Forgot Password page should be loaded, defaults to "loginDivElementId"
      forgot_password_css_url: "/app/fpwd.css", // Forgot Password page customization CSS file path, if not provided default CSS will be rendered
    };

    window.catalyst.auth.signIn("login", config);
  }, []);

  return (
    <div className="container">
      <center>
      <h1 className="title">Birthday Reminder</h1>
      </center>
      <div id="login"></div>
      <p className="homepage">
        <b>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "blue", textDecorationLine: "underline" }}>
            Sign-up
          </Link>{" "}
          now!
        </b>
      </p>
    </div>
  );
};

export default LoginPage;
