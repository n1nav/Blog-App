import React from 'react';

const BlogForm = () => {
  return (
    <div>
      <h2>Add Blog</h2>
      <form>
        <label htmlFor="blogName">Blog Name:</label>
        <input type="text" id="blogName" name="blogName" />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>
        <label htmlFor="authorName">Author Name:</label>
        <input type="text" id="authorName" name="authorName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
