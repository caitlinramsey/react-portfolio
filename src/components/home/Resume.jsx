import React from 'react';
import ResumeFile from '../../assets/resume.pdf'
import './resume.css'

const Resume = () => {
    return (
        <div className='resume'>
            <a href={ResumeFile} download className='btn_resume'>Resume</a>
            <a href='./Contact' className='btn_contact'>Contact</a>
        </div>
    )
}

export default Resume;