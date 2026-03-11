import { useState, useEffect } from "react";

function Users() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:3000/api/users");

        const data = await response.json();

        setUsers(data);
    };

    const createUser = async () => {
        await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });
        setName = "";
        fetchUsers();
    };

    return (
        <div>

            <h2>Users</h2>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />
            <button onClick={createUser}>
                Add User
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </div>
    );
}

export default Users;