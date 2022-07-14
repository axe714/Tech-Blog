const commentForm = document.querySelector('#comment-form');

const commentHandler = async (e) => {
  const urlString = '' + document.location;
  const blogId = urlString.split('/')[4];
  e.preventDefault();

  const commentContent = document
    .querySelector('#comment-content')
    .value.trim();

  if (commentContent) {
    try {
      const response = await fetch('/comment/create', {
        method: 'POST',
        body: JSON.stringify({
          comment_content: commentContent,
          blog_id: blogId,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(blogId)
      console.log(commentContent);

      if (response.ok) {
        return document.location.replace(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

commentForm.addEventListener('submit', commentHandler);
