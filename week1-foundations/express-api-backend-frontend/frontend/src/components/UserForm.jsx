import { useState } from "react";
import {createUser} from "../services/api";

function UserForm({ onUserCreated }) {
    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createUser(name);
        setName("");
        onUserCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
                Add user
            </button>
        </form>
    );
}

export default UserForm;