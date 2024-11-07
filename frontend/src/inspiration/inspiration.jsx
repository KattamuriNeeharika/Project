import React, { useState } from 'react';
import './inspiration.css';

const Inspiration = () => {
    const [idea, setIdea] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [inspirations, setInspirations] = useState([]);

    const handleAddInspiration = (e) => {
        e.preventDefault();

        if (idea && imageUrl) {
            const newInspiration = { idea, imageUrl };
            setInspirations([...inspirations, newInspiration]);
            setIdea('');
            setImageUrl('');
        }
    };

    return (
        <div className="inspiration-wrapper">
            <header className="inspiration-header">
                <h1>Inspiration Board</h1>
                <nav>
                    <a href="/Login">Home</a>
                    <a href="/checklist">Checklist</a>
                    <a href="/guestlist">Guest List</a>
                    <a href="/budget">Budget Calculator</a>
                    <a href="/seating">Seating Chart</a>
                    <a href="/vendors">Vendor Directory</a>
                    <a href="/blogs">Blogs/Resources</a>
                </nav>
            </header>

            <main className="inspiration-main">
                <div className="inspiration-form">
                    <h2>Add Inspiration</h2>
                    <form onSubmit={handleAddInspiration}>
                        <label htmlFor="idea">Inspiration Idea:</label>
                        <input
                            type="text"
                            id="idea"
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            required
                        />

                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="url"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn">Add Inspiration</button>
                    </form>
                </div>

                <div className="inspiration-list">
                    {inspirations.map((inspiration, index) => (
                        <div key={index} className="inspiration-item">
                            <strong>{inspiration.idea}</strong>
                            <img src={inspiration.imageUrl} alt={inspiration.idea} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Inspiration;
