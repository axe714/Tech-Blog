const commentBtn = document.querySelector('.single-blog-comment-btn')
const urlString = '' + document.location 
const blogId = urlString.split('/')[4];

commentBtn.addEventListener('click', () => {
    // return console.log(blogId)
    return document.location.replace(`/blogs/${blogId}/comment`);
})