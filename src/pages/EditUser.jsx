import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../api";

const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleUpdate = async () => {
    await updateUser(id, userData);
    navigate("/users");
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Edit User</h2>
      <input
        className="block border p-2 mb-2"
        placeholder="First Name"
        onChange={(e) =>
          setUserData({ ...userData, first_name: e.target.value })
        }
      />
      <input
        className="block border p-2 mb-2"
        placeholder="Last Name"
        onChange={(e) =>
          setUserData({ ...userData, last_name: e.target.value })
        }
      />
      <input
        className="block border p-2 mb-2"
        placeholder="Email"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <button className="bg-green-500 text-white p-2" onClick={handleUpdate}>
        Save
      </button>
    </div>
  );
};

export default EditUser;
