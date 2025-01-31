import React from 'react'
import { IoLeafSharp } from "react-icons/io5";
import { FaHandFist } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

function Services() {
    return (
        <div>
            <div className="row service-sec-maincontent">
                <div className="col-md-6 ">
                    <div className="service-sec-outside d-flex  ">
                    <div className="service-sec-inside">
                    <h4 className='leaf-icon'><IoLeafSharp /></h4>
                        <h5>Pure, Natural Ingredients</h5>
                        <p>We use only the highest quality, natural henna for vibrant, safe, and long-lasting designs.</p>
                    </div>
                    <div className="service-sec-inside">
                        <h4 className='hand-icon'><FaHandFist /></h4>
                        <h5>Handcrafted Excellence</h5>
                        <p>Every product is made with care and attention to detail to ensure the best performance and results.</p>
                    </div>
                    </div>
                    <div className="service-sec-outside d-flex ">
                    <div className="service-sec-inside">
                        <h4 className='dollar-icon'><AiFillDollarCircle /></h4>
                        <h5>Affordable & Accessible</h5>
                        <p>We offer premium henna products at competitive prices, with fast shipping, so you can enjoy the best without breaking the bank.</p>
                    </div>
                    <div className="service-sec-inside">
                        <h4 className='customer-icon'><IoPeopleSharp /></h4>
                        <h5>Customer Satisfaction</h5>
                        <p> Your experience is our priority, and we are always here to assist you, ensuring you’re happy with every purchase.</p>
                    </div>
                    <div className="fixed-message-btn">
                      <h3><a href="https://wa.me/+916235718437?text=Hello%21%20%F0%9F%91%8B%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20Arabian%20Henna%27s%20products%20and%20services.%20Could%20you%20please%20provide%20more%20information%20on%20your%20henna%20designs%2C%20pricing%2C%20and%20available%20options%3F%0A%0AThank%20you%21%20%F0%9F%99%8F" 
  target="_blank"
  rel="noopener noreferrer"><IoLogoWhatsapp /></a><h4>message us</h4></h3>

                    </div>
                    </div>
                </div>

                <div className="col-md-6 service-sec-image">
                    <img src="images/seventh.jpg" alt="" className='service-sec-img'/>
                </div>
            </div>
            
        </div>
    )
}

export default Services
