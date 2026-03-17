import { useState, useEffect } from "react";
import UserList from "../components/UserList"
import { useUsers } from "../hooks/useUsers";
import UserForm from "../components/UserForm";

function UserPage() {
    const { users, refreshUsers } = useUsers();
    return (
        <div>
            <h1>
                Users
            </h1>
            <UserForm onUserCreated={refreshUsers} />
            <UserList users={users} />
        </div>
    );
}

export default UserPage;