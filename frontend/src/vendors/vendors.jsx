import React, { useState } from 'react';
import './vendors.css';

const Vendors = () => {
    const [vendorName, setVendorName] = useState('');
    const [vendorType, setVendorType] = useState('');
    const [vendorWebsite, setVendorWebsite] = useState('');
    const [vendors, setVendors] = useState([]);

    const handleAddVendor = (e) => {
        e.preventDefault();

        if (vendorName && vendorType && vendorWebsite) {
            const newVendor = {
                name: vendorName,
                type: vendorType,
                website: vendorWebsite
            };
            setVendors([...vendors, newVendor]);
            setVendorName('');
            setVendorType('');
            setVendorWebsite('');
        }
    };

    const handleRemoveVendor = (index) => {
        const updatedVendors = vendors.filter((_, i) => i !== index);
        setVendors(updatedVendors);
    };

    return (
        <div className="vendor-wrapper">
            <header className="vendor-header">
                <h1>Vendor Directory</h1>
                <nav>
                    <a href="/Login">Home</a>
                    <a href="/checklist">Checklist</a>
                    <a href="/guestlist">Guest List</a>
                    <a href="/budget">Budget Calculator</a>
                    <a href="/inspiration">Inspiration Board</a>
                    <a href="/seating">Seating Chart</a>
                    <a href="/blogs">Blogs/Resources</a>
                </nav>
            </header>

            <main className="vendor-main">
                <form onSubmit={handleAddVendor} className="vendor-form">
                    <div className="form-group">
                        <label htmlFor="vendorName">Vendor Name:</label>
                        <input
                            type="text"
                            id="vendorName"
                            value={vendorName}
                            onChange={(e) => setVendorName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vendorType">Vendor Type:</label>
                        <input
                            type="text"
                            id="vendorType"
                            value={vendorType}
                            onChange={(e) => setVendorType(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vendorWebsite">Website URL:</label>
                        <input
                            type="url"
                            id="vendorWebsite"
                            value={vendorWebsite}
                            onChange={(e) => setVendorWebsite(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Add Vendor</button>
                </form>

                <div className="vendor-list">
                    {vendors.map((vendor, index) => (
                        <div key={index} className="vendor-item">
                            <strong>{vendor.name}</strong> ({vendor.type}) - 
                            <a href={vendor.website} target="_blank" rel="noopener noreferrer">{vendor.website}</a>
                            <button onClick={() => handleRemoveVendor(index)} className="btn btn-danger">Remove</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Vendors;
