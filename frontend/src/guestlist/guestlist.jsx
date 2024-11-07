import React, { useState, useEffect } from 'react';
import './guestlist.css';

const GuestList = () => {
    const [guests, setGuests] = useState([]);
    const [guestName, setGuestName] = useState('');
    const [relationship, setRelationship] = useState('');

    useEffect(() => {
        const savedGuests = JSON.parse(localStorage.getItem('guestList'));
        if (savedGuests) {
            setGuests(savedGuests);
        }
    }, []);

    const handleAddGuest = (e) => {
        e.preventDefault();
        if (guestName && relationship) {
            const newGuest = { name: guestName, relationship };
            setGuests([...guests, newGuest]);
            setGuestName('');
            setRelationship('');
        }
    };

    const handleEditGuest = (index) => {
        setGuestName(guests[index].name);
        setRelationship(guests[index].relationship);
        handleRemoveGuest(index);
    };

    const handleRemoveGuest = (index) => {
        setGuests(guests.filter((_, i) => i !== index));
    };

    const handleSaveList = () => {
        localStorage.setItem('guestList', JSON.stringify(guests));
        alert('Guest list saved!');
    };

    const handleLoadList = () => {
        const loadedGuests = JSON.parse(localStorage.getItem('guestList'));
        if (loadedGuests) {
            setGuests(loadedGuests);
            alert('Guest list loaded!');
        } else {
            alert('No saved guest list found.');
        }
    };

    return (
        <div className="guestlist-container">
            <header>
                <h1>Enhanced Guest List Manager</h1>
                <nav>
                    <ul>
                        <li><a href="/Login">Home</a></li>
                        <li><a href="/budget">Budget Calculator</a></li>
                        <li><a href="/vendors">Vendor Directory</a></li>
                        <li><a href="/checklist">Checklist & Timeline</a></li>
                        <li><a href="/inspiration">Inspiration Board</a></li>
                        <li><a href="/seating">Seating Chart</a></li>
                        <li><a href="/blogs">Blogs/Resources</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <form onSubmit={handleAddGuest}>
                    <div className="form-group">
                        <label htmlFor="guestName">Guest Name:</label>
                        <input
                            type="text"
                            id="guestName"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="relationship">Relationship:</label>
                        <input
                            type="text"
                            id="relationship"
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Guest</button>
                    <button type="button" className="btn btn-success" onClick={handleSaveList}>Save Guest List</button>
                    <button type="button" className="btn btn-info" onClick={handleLoadList}>Load Guest List</button>
                </form>

                <div id="guestList">
                    <h2>Guest List</h2>
                    <ul className="list-group">
                        {guests.map((guest, index) => (
                            <li key={index} className="list-group-item">
                                {guest.name} - {guest.relationship}
                                <div className="button-group">
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleEditGuest(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleRemoveGuest(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Total Guests: {guests.length}</p>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Wedding Planner</p>
            </footer>
        </div>
    );
};

export default GuestList;
