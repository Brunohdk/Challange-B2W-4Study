import React from 'react'

import './styles.scss'

export default function TitleDescription({ title, timeWindow, description }) {
    return (
        <div className='history-description'>
            <h4>
                {title ?? ''}
            </h4>
            <p className='timeWindow'>
                {timeWindow ?? ''}
            </p>
            <p className='description'>
                {description ?? ''}
            </p>
        </div>
    )
}
