import React, { useState } from 'react';
import './budget.css';

const Budget = () => {
    const [category, setCategory] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');
    const [actualCost, setActualCost] = useState('');
    const [budgetItems, setBudgetItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category.trim() && estimatedCost && actualCost) {
            const newItem = {
                category: category.trim(),
                estimatedCost: parseFloat(estimatedCost),
                actualCost: parseFloat(actualCost),
            };
            setBudgetItems([...budgetItems, newItem]);
            setCategory('');
            setEstimatedCost('');
            setActualCost('');
        }
    };

    return (
        <div className="budget-wrapper">
            <header className="budget-header">
                <h1>Budget Calculator</h1>
                <nav>
                    <a href="/Login">Home</a>
                    <a href="/guestlist">Guest List Manager</a>
                    <a href="/checklist">Checklist & Timeline</a>
                    <a href="/vendors">Vendor Directory</a>
                    <a href="/inspiration">Inspiration Board</a>
                    <a href="/seating">Seating Chart Tool</a>
                    <a href="/blogs">Blog/Resources</a>
                </nav>
            </header>

            <main className="budget-main">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            id="category"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estimatedCost">Estimated Cost:</label>
                        <input
                            type="number"
                            id="estimatedCost"
                            className="form-control"
                            value={estimatedCost}
                            onChange={(e) => setEstimatedCost(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="actualCost">Actual Cost:</label>
                        <input
                            type="number"
                            id="actualCost"
                            className="form-control"
                            value={actualCost}
                            onChange={(e) => setActualCost(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Budget Item</button>
                </form>

                <div className="budget-summary">
                    <h2>Budget Summary</h2>
                    <ul className="list-group">
                        {budgetItems.map((item, index) => (
                            <li key={index} className="list-group-item">
                                {item.category}: Estimated - ${item.estimatedCost.toFixed(2)}, Actual - ${item.actualCost.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <footer className="budget-footer">
                <p>&copy; 2024 Wedding Planner</p>
            </footer>
        </div>
    );
};

export default Budget;
