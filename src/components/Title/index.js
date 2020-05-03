import React from 'react'

import './styles.scss'

export default function Title({ title, color = '#fff', paddingTop = 0, hrSize = '100%' }) {
    return (
        <div className='title' style={{paddingTop: paddingTop}}>
            <h3 style={{ color: color, marginTop: paddingTop }}>
                {title ?? ''}
            </h3>
            <hr style={{ border: `1px solid ${color}`, width: hrSize }}/>
        </div>
    )
}
