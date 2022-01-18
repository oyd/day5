import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Waiting = () => {
    return (
        <div className="waiting">
            <Spinner animation="border" />
        </div>
    );
};

export default Waiting;
