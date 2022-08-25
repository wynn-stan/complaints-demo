import React from 'react';

function Header(props){
    /**
     * Header contains the company name and logo
     */

    return (
        <>
            <header className="header-container">

                <img className="logo" src='./public/svgs/logo.svg' />
                <h3>Alias</h3>

            </header>
        </>
    )
}

export default Header;