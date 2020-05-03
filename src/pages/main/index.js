import React from 'react'

import ExperienceBar from '../../components/ExperienceBar'
import Title from '../../components/Title'
import HistoryDescription from '../../components/HistoryDescription'
import './styles.scss'

export default function Index() {
    return (
        <div className='main-wrapper'>
            <div className='left-container'>
                <div className='top-section'>
                    <div className='circle'>
                        <p className='circle-text'>
                            Your image
                        </p>
                    </div>
                    <h2 className='name'>
                        BRUNO HIDEKI
                    </h2>
                    <p className='profession'>
                        WEB DEVELOPER
                    </p>
                </div>
                <hr className='divisor'/>
                <div className='bottom-section'>
                    <Title 
                        title={'Profile'}
                        hrSize={'50%'}
                    />
                    <p className='profile-desc'>
                        22-year old web developer from Brazil Springs with 1+ years of work experience in Front-end.
                    </p>
                    <Title 
                        title={'Contact'}
                        hrSize={'50%'}
                    />
                    <div className='contact-desc'>
                        <p className='top-text'>
                            123-456-7890
                        </p>
                        <p className='bottom-text'>
                            012-345-6789
                        </p>
                    </div>
                    <div className='contact-desc'>
                        <p className='top-text'>
                            1490 General Woods.
                        </p>
                        <p className='bottom-text'>
                            Colorado Springs
                        </p>
                    </div>
                    <div className='contact-desc'>
                        <p className='top-text'>
                            brunohideki.co
                        </p>
                        <p className='bottom-text'>
                            mail@brunohideki.com
                        </p>
                    </div>
                    <Title 
                        title={'skills'}
                        hrSize={'50%'}
                        paddingTop= {'20px'}
                    />
                    <ExperienceBar 
                        title={'front end'}
                        percentage={'85%'}
                    />
                    <ExperienceBar 
                        title={'back end'}
                        percentage={'60%'}
                    />
                    <ExperienceBar 
                        title={'writing'}
                        percentage={'85%'}
                    />
                </div>
            </div>
            <div className='right-container'>
                <Title 
                    title={'work experience'}
                    color={'black'}
                    paddingTop= {'20px'}
                />
                <HistoryDescription 
                    title={'front end developer @ hillsong'}
                    timeWindow={'January 2014 -'}
                    description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages'}
                />
                <HistoryDescription 
                    title={'php developer @ creative wizards'}
                    timeWindow={'March 2012 - December 2013'}
                    description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages'}
                />
                <HistoryDescription 
                    title={'ux designer @ graphics masterminds'}
                    timeWindow={'January 2010 - February 2012'}
                    description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages'}
                />
                <Title 
                    title={'education'}
                    color={'black'}
                    paddingTop={'10px'}
                />
                <HistoryDescription 
                    title={'front end developer @ hillsong'}
                    timeWindow={'January 2014 -'}
                    description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages'}
                />
                                <HistoryDescription 
                    title={'php developer @ creative wizards'}
                    timeWindow={'March 2012 - December 2013'}
                    description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages'}
                />
            </div>
        </div>
    )
}
