import { useCallback } from "react";
import "./Button.css";

function Button({ btnvalue }) {
  const logout = useCallback(() => {
    window.catalyst.auth.signOut('/');
  }, []);

  return (
    <div id="logoutbtn">
      <button onClick={logout} id="logout">
        {btnvalue.title}
      </button>
    </div>
  );
}

export default Button;
