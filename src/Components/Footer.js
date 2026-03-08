import React, { useState } from 'react'
import '../Components/Footer.css'
import currency from '../assets/United States of America (US).png'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import gpay from '../assets/Gpay.png'
import ipay from '../assets/ipay.png'
import master from '../assets/masterCard.png'
import palpay from '../assets/palpay.png'
import amex from '../assets/amex.png'
import pay from '../assets/pay.png'

export default function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [linkOpen, setLinkOpen] = useState(false);
    const [follow, setFollow] = useState(false);

    return (
        <footer>
            <div className='container'>
                <section style={{padding:'50px 0 20px 0'}}>
                    <div className='row footer-contact'>
                        <div className='col' style={{ width: '50%' }}>
                            <p className='heading'>Be the first to know</p>
                            <p className='footer-text'>Sign up for updates from mettā muse.</p>
                            <div className='form-text'><input type='text' placeholder='Enter your e-mail...' /> <button>Subscribe</button></div>
                        </div>
                        <div className='col' style={{ width: '50%' }} >
                            <p className='heading conatct'>CONTACT US</p>
                            <p className='footer-text' style={{ display: 'block' }}><a href='tel:+44 221 133 5360'>+44 221 133 5360</a></p>
                            <p className='footer-text' style={{ display: 'block' }}><a href='mailto:customercare@mettamuse.com'>customercare@mettamuse.com</a></p>
                            <p className='heading'>Currency</p>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                                <img src={currency} alt='currency' width={30} height={30} />
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                                    <polygon
                                        points="12,2 22,12 12,22 2,12"
                                        stroke="#ffffff"
                                        stroke-width="2"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <p className='heading' style={{ margin: '0px' }}>USD</p>

                            </div>
                            <p className='footer-text' style={{ fontSize: '12px' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                    <hr style={{ color: '#fff', height: '2px' }} />
                    <div className='row footer-contact second-footer'>
                        <div className='col'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setMenuOpen(!menuOpen)}>
                                <p className='heading mobiletext'>mettā muse</p>
                                <span className={`fa ${menuOpen ? 'fa-angle-up' : 'fa-angle-down'} icon`}></span>
                            </div>
                            {console.log(menuOpen)}
                            <p className={`footer-text ${menuOpen ? "show" : ""}`}>
                                <span>About Us</span>
                                <span>Stories</span>
                                <span>Artisans</span>
                                <span>Boutiques</span>
                                <span>Contact Us</span>
                                <span>EU Compliances Docs</span>
                                <span>Join as a Seller</span>
                            </p>
                        </div>
                        <hr className='hr-divider' style={{ color: '#fff', height: '1px' }} />
                        <div className='col'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setLinkOpen(!linkOpen)}>
                                <p className='heading mobiletext'>Quick Links</p>
                                <span className={`fa ${linkOpen ? 'fa-angle-up' : 'fa-angle-down'} icon`}></span>
                            </div>
                            {console.log(linkOpen)}
                            <p className={`footer-text ${linkOpen ? "show" : ""}`}>
                                <span>Orders & Shipping</span>
                                <span>Join/Login as a Seller</span>
                                <span>Payment & Pricing</span>
                                <span>Return & Refunds</span>
                                <span>FAQs</span>
                                <span>Privacy Policy</span>
                                <span>Terms & Conditions</span>
                            </p>
                        </div>
                        <hr className='hr-divider' style={{ color: '#fff', height: '1px' }} />
                        <div className='col'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setFollow(!follow)}>
                                <p className='heading mobiletext'>Follow Uss</p>
                                <span className={`fa ${follow ? 'fa-angle-up' : 'fa-angle-down'} icon`}></span>
                            </div>
                            {console.log(follow)}
                            <div className={`footer-text ${follow ? "show" : ""}`} style={{ gap: '5px' }}>
                                <img src={insta} alt='Instagram' width={32} height={32} />
                                <img src={linkedin} alt='linkedin' width={32} height={32} />
                            </div>
                            <hr className='hr-divider' style={{ color: '#fff', height: '1px' }} />
                            <p className='heading mobiletext payment-accepts'>mettā muse Accepts</p>
                            <div className='payment-accept' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <img src={gpay} alt='Gpay' height={32} />
                                <img src={master} alt='MasterCard' height={32} />
                                <img src={palpay} alt='palpay' height={32} />
                                <img src={amex} alt='amex' height={32} />
                                <img src={ipay} alt='ipay' height={32} />
                                <img src={pay} alt='Pay' height={32} />
                            </div>
                        </div>
                    </div>
                    <p className='footer-text' style={{ fontSize: '14px',paddingTop:'20px',textAlign:'center',display:'block' }}>Copyright © 2025 mettamuse. All rights reserved..</p>
                </section>
            </div>
        </footer>
    )
}
