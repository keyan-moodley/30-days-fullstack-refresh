import { useState, useEffect } from "react";
import { getUsers } from "../services/api";

export function useUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadUsers() {
            const data = await getUsers();
            setUsers(data);
        };
        loadUsers();
    }, []);
    const refreshUsers = () => {
        getUsers().then(data => setUsers(data || []));
    };
    return { users, refreshUsers};
}