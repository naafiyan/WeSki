import * as React from 'react';
import { Component } from 'react';

import { Link } from "react-router-dom";

function Homepage() {
    return ( 
        <div>Homepage!
            <Link to="/test">This links to test page</Link>
        </div>
    );
}

export default Homepage;