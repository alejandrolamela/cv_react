
import React from 'react'

import "./Experience.scss"

const Experience = ({experience}) => {
  return (
    <div className='experienceBlock'>
    {
        experience.map((item)=> {
            return(
                <div key={JSON.stringify(item)} className='experienceCard'>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
                </div>
            )
        })
    }
    </div>
  )
}

export default Experience