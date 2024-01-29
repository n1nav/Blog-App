import React from 'react';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h3>Blog List</h3>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
