import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contact() {

    const [email,setemail] = useState('')
    const [pass,setpass]=useState("")

    const handleemailchange = (events)=>{
        setemail(events.target.value)
    
    }
    const handlepasschange = (events)=>{
        setpass(events.target.value)
    
    }
    const messageshare = ()=>{
        console.log(email,"submitted");
        
    }

    

    
    return (
        <div>
            <div className="row mt-4">
                <div className="contact-user-form col-md-6">
                    <h5>Get in Touch with Us</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="your name" onChange={(e)=>handleemailchange(e)} className='contact-name'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="your email" className='contact-name' onChange={(e)=>handlepasschange(e)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='contact-name-msg'>submit your message request</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <button onClick={messageshare}><a href="">SEND MESSAAGE</a></button>
                    </Form>

                </div>

                <div className="admin-contact-form col-md-6">
                    <div className="admin-form ">
                        <h5 className='contact-details-heading'>Contact Details</h5>
                        <h6>I’m here to help with any questions or bookings! Feel free to reach out to me through any of the following channels. I look forward to hearing from you soon!</h6>
                        <div className="admin-contact-boxes">
                            <div className="address">
                                <h5>ADDRESS</h5>
                                <h6>Rizwana naduvil p.o 670582,kannur kerala</h6>
                                
                            </div>
                            <div className="address">
                            <h5>CONTACT</h5>
                            <h6>+91 6235718437</h6>

                            </div>
                        </div>
                        <div className="admin-contact-boxes">
                            <div className="address">
                            <h5>EMAIL</h5>
                            <h6>rizwanatp00@gmail.com</h6>
                                
                            </div>
                            <div className="address">
                            <h5>SOCIAL MEDIA</h5>
                            <h3 className='social-media-icons d-flex'>
                                <li><a href="https://wa.me/+916235718437" className='fawhatsapp'><FaWhatsapp /></a></li>
                                <li><a href="https://www.instagram.com/arabian.henna/?utm_source=ig_web_button_share_sheet" className='fainstagram'> <FaInstagram /></a></li>
                                <li><a href="https://www.youtube.com/@loveofus" className='fayoutube'><FaYoutube /></a></li>
                            </h3>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
