import { useState, useEffect } from "react";
import UserList from "../components/UserList"
import { getUsers } from "../services/api";
import UserForm from "../components/UserForm";

function UserPage() {
    const [users, setUsers] = useState([]);
    async function loadUsers() {
        const data = await getUsers();
        setUsers(data);
    }
    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>
            <h1>
                Users
            </h1>
            <UserForm onUserCreated={loadUsers} />
            <UserList users={users} />
        </div>
    );
}

export default UserPage;