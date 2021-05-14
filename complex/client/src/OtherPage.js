import React from 'react';
import { Link } from 'react-router-dom';

export const OtherPage = () => {
    return (
        <div>
            Im the other page
            <Link to="/">Go back home</Link>
        </div>
    )
}