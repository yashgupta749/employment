import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../api";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers(page);
      setUsers(data.data);
    };
    loadUsers();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Users</h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 border-b"
        >
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={user.avatar}
              alt={user.first_name}
            />
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
          <div>
            <button
              className="bg-yellow-500 text-white p-2 mr-2"
              onClick={() => navigate(`/edit/${user.id}`)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-2"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white p-2 mr-2"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersList;
