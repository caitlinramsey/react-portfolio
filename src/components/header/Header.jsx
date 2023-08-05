import React from 'react';
import "./header.css";
import Resume from './Resume';

function Header () {
    return (
        <>
            <header id='header'>
                <div className='container header_container'>
                    <h4>Hello, I'm</h4>
                    <h1>Caitlin Ramsey</h1>
                    <h4>Full-Stack Developer/Graphic Designer/Photographer</h4>
                    <Resume />
                </div>
            </header>
        </>
    )
}