import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="home-container">
      <div className="left-panel">
        <h2>Blog List</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id} onClick={() => handleBlogSelect(blog)}>
                  <td>{blog.id}</td>
                  <td>{blog.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="right-panel">
        <h2>Selected Blog</h2>
        <div className="selected-blog">
          {selectedBlog && (
            <div className="card">
              <p>ID: {selectedBlog.id}</p>
              <p>Title: {selectedBlog.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
