import React from 'react';

function Nav(props){

    /**
     * Side Nav contains two buttons,
     *  View All Complaints 
     *  Submit A Complaint
     */

    return (
        <>
            <nav className="nav-container">
                <button className="post-view-btn">Submit A Complaint</button>
                <button className="view-all-btn">View All Complaints</button>
            </nav>
        </>
    );

}

export default Nav;