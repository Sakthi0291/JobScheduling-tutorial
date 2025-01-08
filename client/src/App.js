import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./Signup";
import ListUsers from "./ListUsers";
import UserProfile from "./UserProfile";
function App() {
return (
<HashRouter>
<Routes>
<Route path="/" element={<Layout />} />
<Route path="/signup" element={<Signup />} />
<Route path="/addUserPage" element={<UserProfile />} />
<Route path="/ListUsers" element={<ListUsers />} />
<Route path="" element={<Navigate to="/" replace />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</HashRouter>
);
}
export default App;