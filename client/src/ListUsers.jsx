import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import TopBar from "./components/TopBar";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isModelOpen, setModal] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/server/advance_function/getReminder");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.ID === id);
    setEditData(userToEdit);
    setModal(true);
  };

  const handleUpdate = async (updatedData) => {
    try {
      await axios.put("/server/advance_function/updateReminder", updatedData);
      alert("User updated successfully!");
      setEditData(null);
      setModal(false);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`/server/advance_function/deleteReminder/${id}`);
        setUsers(users.filter((user) => user.ID !== id));
        alert("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
  const handleToggle = async (ID, checked) => {
    const AutoSendStatus = checked ? "enable" : "disable";
    try {
      await axios.patch("/server/advance_function/toggleAutoSend", {
        id: ID,
        status: AutoSendStatus,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.ID === ID ? { ...user, AutoSend: checked } : user
        )
      );
    } catch (error) {
      console.error("Error toggling the user:", error);
    }
  };

  return (
    <>
    <div >
       <TopBar />
    </div>
    <div className="userlist-div"  style={{height: "calc(100vh - 60px)",margin: "60px 0 0"}}>
      <UserList
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
      {isModelOpen && (
        <Modal
          editData={editData}
          onUpdate={handleUpdate}
          onClose={() => setModal(false)}
        />
      )}
    </div>
    </>
  );
}

export default ListUsers;
