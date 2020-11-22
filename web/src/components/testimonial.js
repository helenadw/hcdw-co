import React from 'react'
import { Link } from 'gatsby'
import testimonialStyles from './testimonial.module.css'


function Testimonial() {
    return (
        <div className={testimonialStyles.testimonialWrapper}>
            <div className={testimonialStyles.testimonialContainer}>
                <p className={testimonialStyles.testimonialCopy}>"Thanks for tailoring my website to be specific to multiple different needs quickly! You really understood exactly what I was looking for from the brief."</p>
                <h4 className={testimonialStyles.testimonialHeading}>Ruth Gibbs</h4>
                <h4 className={testimonialStyles.testimonialHeading}>Founder, January Studio</h4>

            </div>
        </div>
    )
}

export default Testimonial