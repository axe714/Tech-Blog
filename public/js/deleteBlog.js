const deleteBtn = document.querySelectorAll('.delete-blog-btn');

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

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].onclick = () => {
    blog_id = deleteBtn[i].dataset.id;
    deleteBlogHandler(blog_id);
  }
}