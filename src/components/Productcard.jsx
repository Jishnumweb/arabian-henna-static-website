import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcard() {
    return (
        <div>
            <div className="product-card-port">
                <div className="row">
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/firstpic.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Bridal henna</h4>
                            <p>$50</p>
                        </div>
                    </div>
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/second.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Nail liquid</h4>
                            <p>$45</p>
                        </div>
                    </div>
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/tenth.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Black henna</h4>
                            <p>$50</p>
                        </div>
                    </div>
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/fourth.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Henna powder</h4>
                            <p>100g - $100</p>
                        </div>
                    </div>
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/fifth.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Normal henna</h4>
                            <p>$50</p>
                        </div>
                    </div>
                    <div className="col-md-4 hover-product">
                        <Card.Img variant="top" src="images/sixth.jpg" className='product-card-img' />
                        <div className="productcart-contents text-center">
                            <h4 className='m-0'>Hair henna</h4>
                            <p>$350</p>
                        </div>
                    </div>
                  
                </div>


            </div>



        </div>
    )
}

export default Productcard
