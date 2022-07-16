const updateBlogForm = document.querySelector('#blog-form');

const updateFormHandler = async (e) => {
  const urlString = '' + document.location;
  const blogId = urlString.split('/')[5];
  e.preventDefault();

  const blogTitle = document.querySelector('#blog-title').value.trim();
  const blogContent = document.querySelector('#blog-content').value.trim();

  if (blogTitle && blogContent) {
    try {
      const response = await fetch(`/blog/update/${blogId}`, {
        method: 'PUT',
        body: JSON.stringify({
          blogTitle,
          blogContent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        return document.location.replace(`/blogs/${blogId}`);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

updateBlogForm.addEventListener('submit', updateFormHandler);
