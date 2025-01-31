import React from 'react'
import { MdRateReview } from "react-icons/md";
function Review() {
    return (
        <div>
            <div className="review-sec-box">
            <div className="review-boxes">
                    <h3 className='mb-0 colun-symbol'><MdRateReview /></h3>
                    <div className="review-box">
                        <p> "I had my first henna experience with Arabian Henna at a festival, and I couldn’t be happier with the result. The artist was friendly, professional, and the design was exactly what I wanted. I’ll be booking again for my birthday celebration!"</p>
                            <p>Sarah M. - ★★★★★ </p>
                    </div>
                </div>
                <div className="review-boxes">
                    <h3 className='mb-0 colun-symbol'><MdRateReview /></h3>
                    <div className="review-box">
                        <p>"I absolutely loved the henna designs I got from Arabian Henna for my wedding! The artist was incredibly skilled, and the designs were absolutely stunning. My guests couldn’t stop talking about how beautiful the henna looked.awesome!"</p>
                        <p>Amina K. - ★★★★★</p>
                    </div>
                </div>
                <div className="review-boxes">
                    <h3 className='mb-0 colun-symbol'><MdRateReview /></h3>
                    <div className="review-box">
                        <p> "I’ve been using Arabian Henna’s products for months, and I’m always impressed by the quality. The henna cones are fresh, easy to apply, and leave a deep, long-lasting stain. Highly recommend for anyone who loves doing henna at home!"</p>
                        <p>Noura F. - ★★★★★</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Review
