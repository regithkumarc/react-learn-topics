import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-coreui-toggle="collapse" data-coreui-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" className="nav-link">Add/View</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/view" className="nav-link">View</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbars;