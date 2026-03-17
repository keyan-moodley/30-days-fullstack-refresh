const API_URL = "http://localhost:5000/api";

export async function getUsers() {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data
}

export async function createUser(name) {
    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });
    const data = await response.json();
    return data;
}