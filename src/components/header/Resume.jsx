import React from 'react';
import ResumeFile from '../../assets/resume.pdf'

const Resume = () => {
    return (
        <div className='resume'>
            <a href={ResumeFile} download className='btn'>Resume</a>
            <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default Resume;