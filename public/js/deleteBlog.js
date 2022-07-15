const deleteBtn = document.querySelector('#delete-blog-btn');

const deleteBlogHandler = async (id) => {
  try {
    const blog_id = id;
    const response = await fetch('/blog/delete', {
      method: 'DELETE',
      body: JSON.stringify({
        blog_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      return document.location.replace('/dashboard');
    }
    
  } catch (err) {
    console.log(err);
  }
};

deleteBtn.addEventListener('click', deleteBlogHandler);
