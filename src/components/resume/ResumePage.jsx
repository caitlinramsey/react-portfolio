import React from 'react';
import ResumeFile from '../../assets/resume.pdf'
import './resumePage.css'

function ResumePage () {
    return (
        <section id='resume_file'>
            <h1>Resume</h1>
            <a href={ResumeFile} download className='btn_download_resume'>Download Resume</a>

            <div className='resume_image'></div>
        </section>
    )
}

export default ResumePage;