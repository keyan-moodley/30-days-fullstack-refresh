async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const filteredUsers = users.filter(user =>
            user.company.name.includes("Group")
        ).map(({name, email, company}) => ({name, email, company}));
        const emails = filteredUsers.map(user =>
            user.email
        );
        console.log(filteredUsers)
    } catch (error) {
        console.error("Error fethcing users:", error);
    }
}

getUsers();