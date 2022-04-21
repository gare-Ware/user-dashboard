const tableContainer = document.getElementById('table-container')

class User {
    static all = []

    constructor(user) {
        const { id, name, username, email, phone, website } = user
        this.id = id
        this.name = name
        this.username = username.toLowerCase()
        this.email = email.toLowerCase()
        this.phone = phone
        this.website = website
        User.all = [...User.all, this]
    }

    static renderAllUsers() {
        tableContainer.innerHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
                ${User.all.map(user => {
                    return `
                        <tr>
                            <td id=${user.id} >${user.name}</td>
                            <td>@${user.username}</td>
                            <td>${user.email}</td>
                            <td>${user.phone}</td>
                            <td>${user.website}</td>
                        </tr>
                        `
                }).join('')}
            </table>
        `

         for(let user of User.all){
             document.getElementById(user.id).onclick = () => {
                Post.renderUserPosts(user)
             }
         }
    }
}