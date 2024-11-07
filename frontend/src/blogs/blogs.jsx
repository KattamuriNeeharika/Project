import React, { useState } from 'react';
import './blogs.css';

const Blogs = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [blogUrl, setBlogUrl] = useState('');
    const [blogs, setBlogs] = useState([]);

    const handleAddBlog = (e) => {
        e.preventDefault();
        const newBlog = { title: blogTitle, content: blogContent, url: blogUrl };
        setBlogs([...blogs, newBlog]);

        // Reset form fields
        setBlogTitle('');
        setBlogContent('');
        setBlogUrl('');
    };

    return (
        <div className="blogs-wrapper">
            <header className="blogs-header">
                <h1>Blogs/Resources</h1>
                <nav>
                    <a href="/Login">Home</a>
                    <a href="/checklist">Checklist</a>
                    <a href="/guestlist">Guest List</a>
                    <a href="/budget">Budget Calculator</a>
                    <a href="/vendors">Vendor Directory</a>
                    <a href="/seating">Seating Chart</a>
                    <a href="/inspiration">Inspiration Board</a>
                </nav>
            </header>

            <main className="blogs-main">
                <div className="blog-form">
                    <h2>Add a Blog Entry</h2>
                    <form onSubmit={handleAddBlog}>
                        <label htmlFor="blogTitle">Blog Title:</label>
                        <input
                            type="text"
                            id="blogTitle"
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                            required
                        />

                        <label htmlFor="blogContent">Blog Content:</label>
                        <textarea
                            id="blogContent"
                            rows="5"
                            value={blogContent}
                            onChange={(e) => setBlogContent(e.target.value)}
                            required
                        ></textarea>

                        <label htmlFor="blogUrl">Blog URL:</label>
                        <input
                            type="url"
                            id="blogUrl"
                            value={blogUrl}
                            onChange={(e) => setBlogUrl(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn">Add Blog Entry</button>
                    </form>
                </div>

                <div className="blog-list">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-item">
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Blogs;
