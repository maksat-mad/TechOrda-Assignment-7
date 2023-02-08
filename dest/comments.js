"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getComments_1 = require("./getters/getComments");
const commentsDiv = document.getElementById("comments");
const button = document.getElementById("search");
const input = document.querySelector('input');
let content = '';
button.addEventListener('click', (event) => {
    commentsDiv.innerHTML = "<h2>Loading...</h2>";
    (0, getComments_1.getComments)(input.value)
        .then(comments => {
        if (Array.isArray(comments)) {
            comments.forEach(comment => {
                content += `
                    <div class="card">
                        <div>
                            <div class="name">
                                <h3>${comment.email}</h3>
                                <h3>Post id: ${comment.postId}</h3>
                            </div>
                            ${comment.body}
                        </div>
                    </div>`;
            });
        }
    })
        .then(() => {
        if (content.length !== 0) {
            commentsDiv.innerHTML = content;
        }
        else {
            commentsDiv.innerHTML = "<h2>No comments found</h2>";
        }
    })
        .catch(error => {
        commentsDiv.innerHTML = `<h2>ERROR: ${error}</h2>`;
        commentsDiv.style.color = "crimson";
    });
    content = '';
});
