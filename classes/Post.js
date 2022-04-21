const postsContainer = document.getElementById('posts-container')

class Post {
    static all = []

    constructor(post) {
        const { userId, id, title, body } = post
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
        Post.all = [...Post.all, this]
    }

    static renderUserPosts(user) {
        const selectedUserPosts = Post.all.filter(post => post.userId === user.id)
        postsContainer.innerHTML = selectedUserPosts.map(post => {
            return `
                <div>
                    <h1>${post.title}</h1>
                    <h3>by: ${user.username}</h3>
                    <p>${post.body}</p>
                </div>
            `
        }).join('')
    }

}