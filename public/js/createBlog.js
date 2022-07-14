const postBlogForm = document.querySelector('#blog-form');

const postBlogHandler = async (e) => {
  e.preventDefault();

  const blogTitle = document.querySelector('#blog-title').value.trim();
  const blogContent = document.querySelector('#blog-content').value.trim();

  if (blogTitle && blogContent) {
    try {
      const response = await fetch('/blog/create', {
        method: 'POST',
        body: JSON.stringify({
          blogTitle,
          blogContent,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log('TITLE ---- ', blogTitle);
      // console.log('CONTENT ----', blogContent);

      if (response.ok) {
        return document.location.replace('/dashboard');
      }
      
    } catch (err) {
      console.log(err);
    }
  }
};

postBlogForm.addEventListener('submit', postBlogHandler);
