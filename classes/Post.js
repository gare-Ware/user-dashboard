const postsContainer = document.getElementById('posts-container')

class Post {
    static all = []

    constructor(post) {
        const { userid, id, title, body } = post
        this.userid = userid
        this.id = id
        this.title = title
        this.body = body
        Post.all = [...Post.all, this]
    }

    static renderUserPosts(user) {
        const selectedUserPosts = Post.all.filter(post => user.id === post.userid)
        postsContainer.innerHTML = 'test'
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