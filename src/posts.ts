import {getPosts} from "./getters/getPosts";

const postsDiv = document.getElementById("posts")!;
let content = '';

getPosts()
    .then(posts => {
        if (Array.isArray(posts)) {
            posts.forEach(post => {
                content += `
                    <div class="card">
                        <div>
                            <div class="name">
                                <h3>${post.title.split(' ').slice(0, 2)}</h3>
                                <h3>Post id: ${post.id}</h3>
                            </div>
                            ${post.body}
                        </div>
                    </div>`;
            });
        }
    })
    .then(() => {
        if (content.length !== 0) {
            postsDiv.innerHTML = content;
        } else {
            postsDiv.innerHTML = "<h2>No posts found</h2>"
        }
    })
    .catch(error => {
        postsDiv.innerHTML = `<h2>ERROR: ${error}</h2>`;
        postsDiv.style.color = "crimson";
    });