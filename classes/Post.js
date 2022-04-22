const inputContainer = document.getElementById('input-container')
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
        inputContainer.innerHTML = `
            <div class='post-filter'>
                <label for="post-filter">
                    <input id="post-filter-input" type="text" name="post-filter" placeholder="filter posts by title">
                </label>
            </div>
        `
        const renderPosts = posts => {
            postsContainer.innerHTML = posts.map(post => {
                return `
                    <div class='post'>
                        <h2>${post.title}</h1>
                        <h3>@${user.username}</h3>
                        <p>${post.body}</p>
                    </div>
                `
            }).join('')
        }

        renderPosts(selectedUserPosts)
        const filterInput = document.getElementById('post-filter-input')
        filterInput.addEventListener("keydown", e => {
            e.preventDefault()
            e.key === "Backspace"
            ? filterInput.value = filterInput.value.slice(0, -1)
            : filterInput.value += e.key
            const filteredPosts = selectedUserPosts.filter(post => post.title.includes(filterInput.value))
            renderPosts(filteredPosts)
        })
    }

}