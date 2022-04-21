const apiURL = "https://jsonplaceholder.typicode.com/"

const fetchUsers = () => {
    return fetch(`${apiURL}users`)
        .then(response => response.json())
        .then(data => data.map(user => new User(user)))
}

const fetchPosts = () => {
    return fetch(`${apiURL}posts`)
        .then(response => response.json())
        .then(data => data.map(post => new Post(post)))
}

const start = async () => {
    await fetchUsers()
    await fetchPosts()
    User.renderAllUsers()
}

start()

