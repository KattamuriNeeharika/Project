import React, { useState } from 'react';
import './seating.css';

const Seating = () => {
    const [guestName, setGuestName] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [seatingList, setSeatingList] = useState([]);

    const handleAddGuest = (e) => {
        e.preventDefault();
        if (guestName && tableNumber) {
            const newGuest = { guestName, tableNumber };
            setSeatingList([...seatingList, newGuest]);
            setGuestName('');
            setTableNumber('');
        }
    };

    return (
        <div className="seating-wrapper">
            <header className="seating-header">
                <h1>Seating Chart Tool</h1>
                <nav>
                    <a href="/Login">Home</a>
                    <a href="/checklist">Checklist</a>
                    <a href="/guestlist">Guest List</a>
                    <a href="/budget">Budget Calculator</a>
                    <a href="/inspiration">Inspiration Board</a>
                    <a href="/vendors">Vendor Directory</a>
                    <a href="/blogs">Blogs/Resources</a>
                </nav>
            </header>

            <main className="seating-main">
                <div className="guest-form">
                    <h2>Add Guest</h2>
                    <form onSubmit={handleAddGuest}>
                        <label htmlFor="guestName">Guest Name:</label>
                        <input
                            type="text"
                            id="guestName"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            required
                        />

                        <label htmlFor="tableNumber">Table Number:</label>
                        <input
                            type="text"
                            id="tableNumber"
                            value={tableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn">Add Guest</button>
                    </form>
                </div>

                <div className="seating-list">
                    {seatingList.map((guest, index) => (
                        <div key={index} className="seating-item">
                            <strong>{guest.guestName}</strong> - Table {guest.tableNumber}
                        </div>
                    ))}
                </div>
            </main>

            <footer className="seating-footer">
                &copy; 2024 Seating Chart Tool
            </footer>
        </div>
    );
};

export default Seating;
