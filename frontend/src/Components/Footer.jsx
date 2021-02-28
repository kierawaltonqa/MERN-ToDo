import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <hr class="light" />
                        <h5>Contact Details</h5>
                        <hr class="light" />
                        <ul>
                            <li>Phone Number</li>
                            <li>Email Form</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="col-md-4">
                        <hr class="light" />
                        <h5>Our Hours</h5>
                        <hr class="light" />
                        <p>Monday-Thursday</p>
                        <p>Friday and Saturday</p>
                        <p>Sunday</p>
                    </div>
                    <div className="col-md-4">
                        <hr class="light" />
                        <h5>Service Area</h5>
                        <hr class="light" />
                        <p>Dorking, Surrey, RH4 1PG</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p>&copy; QA Cinemas Ltd | All Rights Reserved | Terms Of Service</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;