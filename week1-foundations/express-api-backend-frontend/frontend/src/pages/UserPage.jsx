import { useState, useEffect } from "react";
import UserList from "../components/UserList"
import { getUsers } from "../services/api";

function UserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const data = await getUsers();
            setUsers(data);
        }
        loadUsers();
    }, []);

    return (
        <div>
            <h1>
                Users
            </h1>
            <UserList users={users} />
        </div>
    );
}

export default UserPage