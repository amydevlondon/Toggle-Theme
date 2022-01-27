import React from 'react';

export const Value = ({ id, text }) => {
    return (
        <article className="value">
            <h3>{id}. {text}</h3>
        </article>
    );
};

export default Value;