import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UsersList from "./pages/UserList";
import EditUser from "./pages/EditUser";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </BrowserRouter>
);

export default App;
