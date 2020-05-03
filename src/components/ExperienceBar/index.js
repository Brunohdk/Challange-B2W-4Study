import React from 'react'

import './styles.scss'

export default function ExperienceBar({ title, percentage }) {
    return (
        <div className='experience-bar'>
            <h5 className='title'>
                {title ?? ''}
            </h5>
            <div className='bar'>
                <div className='progress' style={{width: percentage}}>

                </div>
            </div>
        </div>
    )
}
