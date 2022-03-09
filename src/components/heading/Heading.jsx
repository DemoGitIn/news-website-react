import React from 'react';
import { Link } from 'react-router-dom';
import './heading.css';

const Heading = () => {
    return (
        <div className="section-heading">
            <h2>News</h2>
            <div className="all">
                <Link to="/news">
                    <h3>All →</h3>
                </Link>
            </div>
        </div>
    );
};

export default Heading;