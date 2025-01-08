import ToggleSwitch from "./ToggleSwitch";
import "./userlist.css";

function UserList({ users, onEdit, onDelete, onToggle }) {
  return (
    <div className="users-container">
      {users.map((user) => (
        <div className="users-lists" key={user.ID}>
          <div className="user-item">
            <div className="left-content">
              <span className="name">{user.Name}</span>
              <span className="date">{user.BirthDay}</span>
              <span className="message">{user.Message}</span>
              <span className="email">{user.Email}</span>
            </div>
            <div className="right-button">
              <ToggleSwitch
                isChecked={user.AutoSend}
                onToggle={(checked) => onToggle(user.ID, checked)}
              />
              <button className="edit-btn" onClick={() => onEdit(user.ID)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(user.ID)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
