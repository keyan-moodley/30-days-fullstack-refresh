import { useState } from "react";
import {createUser} from "../services/api";

function UserForm({ onUserCreated }) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        if (!name.trim()) {
            setError("Name is required")
            return;
        }

        try {
            setLoading(true);
            await createUser(name);
            setName("");
            onUserCreated();
        } catch (error) {
            setError("Failed to create user")
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add User"}
            </button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default UserForm;